import { CheckCircle2, Play, RotateCw } from "lucide-react"

interface OverallStatusProps {
  passed: number
  total: number
  lastRun: string
  duration: string
  running: boolean
  onRunAll: () => void
  onRunFailed: () => void
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
    </div>
  )
}

export function OverallStatus({
  passed,
  total,
  lastRun,
  duration,
  running,
  onRunAll,
  onRunFailed,
}: OverallStatusProps) {
  const allHealthy = passed === total

  return (
    <section className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-success text-success-foreground">
            <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-xl font-bold text-foreground">
              Overall Status:{" "}
              <span className={allHealthy ? "text-success" : "text-warning-foreground"}>
                {allHealthy ? "Healthy" : "Attention Needed"}
              </span>
            </h2>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {passed} / {total} tests passed
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
          <Metric label="Last Run" value={`May 26, 2025 ${lastRun} UTC`} />
          <Metric label="Duration" value={duration} />
          <Metric label="Tests" value={String(total)} />
        </div>

        <div className="flex flex-col gap-2 lg:w-52">
          <button
            type="button"
            onClick={onRunAll}
            disabled={running}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            <Play className="h-4 w-4" aria-hidden="true" />
            Run All Tests
          </button>
          <button
            type="button"
            onClick={onRunFailed}
            disabled={running}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/40 bg-card px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5 disabled:opacity-60"
          >
            <RotateCw className="h-4 w-4" aria-hidden="true" />
            Run Failed Tests
          </button>
        </div>
      </div>
    </section>
  )
}
