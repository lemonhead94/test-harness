import { ArrowDown } from "lucide-react"
import type { Resource } from "@/lib/types"
import { cn } from "@/lib/utils"
import { HealthBadge } from "./StatusBadge"
import { AzureIcon } from "@/lib/azure-icons"

function barColor(health: Resource["health"]) {
  if (health === "healthy") return "bg-success"
  if (health === "degraded") return "bg-warning"
  return "bg-danger"
}

export function ResourceCard({ resource }: { resource: Resource }) {
  const passed = resource.tests.filter((t) => t.status === "passed").length
  const total = resource.tests.length
  const pct = total === 0 ? 0 : Math.round((passed / total) * 100)

  return (
    <article className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="flex items-start gap-2.5">
        <span
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
            resource.iconClass,
          )}
        >
          <AzureIcon name={resource.icon} className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold leading-tight text-foreground text-balance">
            {resource.name}
          </h3>
          <div className="mt-1.5">
            <HealthBadge health={resource.health} />
          </div>
        </div>
      </div>

      <div>
        <p className="text-2xl font-bold text-foreground">
          {passed} / {total}
        </p>
        <p className="text-xs text-muted-foreground">Passed</p>
      </div>

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          className={cn("h-full rounded-full", barColor(resource.health))}
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <ArrowDown className="h-3 w-3" aria-hidden="true" />
          {resource.avgLatency} avg
        </span>
        <span className="font-medium text-foreground">{resource.successRate}%</span>
      </div>
    </article>
  )
}
