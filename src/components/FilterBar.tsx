import { CheckCircle2, XCircle, Loader2, MinusCircle, LayoutGrid, Search } from "lucide-react"
import type { TestStatus } from "@/lib/types"
import { cn } from "@/lib/utils"

export type FilterKey = "all" | TestStatus

interface FilterBarProps {
  active: FilterKey
  counts: Record<FilterKey, number>
  onChange: (key: FilterKey) => void
  query: string
  onQueryChange: (value: string) => void
  resourceOptions: { id: string; name: string }[]
  resourceFilter: string
  onResourceFilterChange: (value: string) => void
}

const tabs: { key: FilterKey; label: string; icon: typeof LayoutGrid }[] = [
  { key: "all", label: "All", icon: LayoutGrid },
  { key: "passed", label: "Passed", icon: CheckCircle2 },
  { key: "failed", label: "Failed", icon: XCircle },
  { key: "running", label: "Running", icon: Loader2 },
  { key: "skipped", label: "Skipped", icon: MinusCircle },
]

export function FilterBar({
  active,
  counts,
  onChange,
  query,
  onQueryChange,
  resourceOptions,
  resourceFilter,
  onResourceFilterChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter tests by status">
        {tabs.map(({ key, label, icon: Icon }) => {
          const isActive = active === key
          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(key)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
                isActive
                  ? "border-primary/30 bg-primary/10 text-primary"
                  : "border-border bg-card text-muted-foreground hover:bg-muted",
              )}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {label} ({counts[key]})
            </button>
          )
        })}
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search tests or resources..."
            aria-label="Search tests or resources"
            className="w-full rounded-lg border border-border bg-card py-2 pl-9 pr-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-primary/20 sm:w-64"
          />
        </div>

        <select
          value={resourceFilter}
          onChange={(e) => onResourceFilterChange(e.target.value)}
          aria-label="Filter by resource"
          className="rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
        >
          <option value="all">All Resources</option>
          {resourceOptions.map((r) => (
            <option key={r.id} value={r.id}>
              {r.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
