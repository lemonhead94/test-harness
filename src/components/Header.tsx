import { Cloud, RotateCw } from "lucide-react"
import { cn } from "@/lib/utils"

interface HeaderProps {
  autoRefresh: boolean
  onToggleAutoRefresh: () => void
  lastUpdated: string
  refreshing: boolean
}

export function Header({ autoRefresh, onToggleAutoRefresh, lastUpdated, refreshing }: HeaderProps) {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Cloud className="h-6 w-6" aria-hidden="true" />
        </span>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground text-balance">
            Infrastructure Test Harness
          </h1>
          <p className="mt-0.5 text-sm text-muted-foreground text-pretty">
            Validate connectivity and core operations for all cloud resources
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          role="switch"
          aria-checked={autoRefresh}
          onClick={onToggleAutoRefresh}
          className="flex items-center gap-2.5 rounded-lg text-sm font-medium text-foreground"
        >
          Auto refresh
          <span
            className={cn(
              "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
              autoRefresh ? "bg-primary" : "bg-muted-foreground/30",
            )}
          >
            <span
              className={cn(
                "inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform",
                autoRefresh ? "translate-x-5" : "translate-x-0.5",
              )}
            />
          </span>
        </button>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="hidden sm:inline">Last updated: {lastUpdated}</span>
          <RotateCw className={cn("h-4 w-4", refreshing && "animate-spin text-primary")} aria-hidden="true" />
        </div>
      </div>
    </header>
  )
}
