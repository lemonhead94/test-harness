import { CheckCircle2, XCircle, Loader2, MinusCircle } from "lucide-react"
import type { TestStatus, ResourceHealth } from "@/lib/types"
import { cn } from "@/lib/utils"

const statusConfig: Record<
  TestStatus,
  { label: string; icon: typeof CheckCircle2; className: string; spin?: boolean }
> = {
  passed: {
    label: "Passed",
    icon: CheckCircle2,
    className: "bg-success-muted text-success",
  },
  failed: {
    label: "Failed",
    icon: XCircle,
    className: "bg-danger-muted text-danger",
  },
  running: {
    label: "Running",
    icon: Loader2,
    className: "bg-blue-50 text-blue-600",
    spin: true,
  },
  skipped: {
    label: "Skipped",
    icon: MinusCircle,
    className: "bg-muted text-muted-foreground",
  },
}

export function StatusBadge({ status }: { status: TestStatus }) {
  const config = statusConfig[status]
  const Icon = config.icon
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium",
        config.className,
      )}
    >
      <Icon className={cn("h-3.5 w-3.5", config.spin && "animate-spin")} aria-hidden="true" />
      {config.label}
    </span>
  )
}

const healthConfig: Record<ResourceHealth, { label: string; className: string }> = {
  healthy: { label: "Healthy", className: "bg-success-muted text-success" },
  degraded: { label: "Degraded", className: "bg-warning-muted text-warning-foreground" },
  unhealthy: { label: "Unhealthy", className: "bg-danger-muted text-danger" },
}

export function HealthBadge({ health }: { health: ResourceHealth }) {
  const config = healthConfig[health]
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium",
        config.className,
      )}
    >
      {config.label}
    </span>
  )
}
