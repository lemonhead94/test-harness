import { useEffect, useMemo, useState } from "react"
import { Header } from "./components/Header"
import { OverallStatus } from "./components/OverallStatus"
import { ResourceSummary } from "./components/ResourceSummary"
import { FilterBar, type FilterKey } from "./components/FilterBar"
import { TestTable } from "./components/TestTable"
import { resources } from "./lib/data"
import type { Resource } from "./lib/types"

function nowUtc() {
  return new Date().toISOString().slice(11, 19)
}

export default function App() {
  const [autoRefresh, setAutoRefresh] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [lastUpdated, setLastUpdated] = useState("14:32:18 UTC")
  const [filter, setFilter] = useState<FilterKey>("all")
  const [query, setQuery] = useState("")
  const [resourceFilter, setResourceFilter] = useState("all")

  // Auto refresh just updates the "last updated" timestamp on an interval.
  useEffect(() => {
    if (!autoRefresh) return
    const id = setInterval(() => {
      setRefreshing(true)
      setLastUpdated(`${nowUtc()} UTC`)
      const t = setTimeout(() => setRefreshing(false), 800)
      return () => clearTimeout(t)
    }, 5000)
    return () => clearInterval(id)
  }, [autoRefresh])

  const allTests = useMemo(() => resources.flatMap((r) => r.tests), [])
  const totalTests = allTests.length
  const passedTests = allTests.filter((t) => t.status === "passed").length

  const counts = useMemo(() => {
    const base: Record<FilterKey, number> = {
      all: totalTests,
      passed: 0,
      failed: 0,
      running: 0,
      skipped: 0,
    }
    for (const t of allTests) base[t.status] += 1
    return base
  }, [allTests, totalTests])

  const filteredGroups: Resource[] = useMemo(() => {
    const q = query.trim().toLowerCase()
    return resources
      .filter((r) => resourceFilter === "all" || r.id === resourceFilter)
      .map((r) => ({
        ...r,
        tests: r.tests.filter((t) => {
          const matchesStatus = filter === "all" || t.status === filter
          const matchesQuery =
            q === "" ||
            t.name.toLowerCase().includes(q) ||
            t.message.toLowerCase().includes(q) ||
            r.name.toLowerCase().includes(q)
          return matchesStatus && matchesQuery
        }),
      }))
  }, [filter, query, resourceFilter])

  const handleManualRefresh = () => {
    setRefreshing(true)
    setLastUpdated(`${nowUtc()} UTC`)
    setTimeout(() => setRefreshing(false), 900)
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <Header
          autoRefresh={autoRefresh}
          onToggleAutoRefresh={() => setAutoRefresh((v) => !v)}
          lastUpdated={lastUpdated}
          refreshing={refreshing}
        />

        <OverallStatus
          passed={passedTests}
          total={totalTests}
          lastRun="14:32:18"
          duration="9.2 sec"
          running={refreshing}
          onRunAll={handleManualRefresh}
          onRunFailed={() => {
            setFilter("failed")
            handleManualRefresh()
          }}
        />

        <ResourceSummary resources={resources} />

        <FilterBar
          active={filter}
          counts={counts}
          onChange={setFilter}
          query={query}
          onQueryChange={setQuery}
          resourceOptions={resources.map((r) => ({ id: r.id, name: r.name }))}
          resourceFilter={resourceFilter}
          onResourceFilterChange={setResourceFilter}
        />

        <TestTable groups={filteredGroups} />
      </main>
    </div>
  )
}
