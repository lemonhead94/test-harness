import type { AzureIconName } from "./azure-icons"

export type { AzureIconName }

export type TestStatus = "passed" | "failed" | "running" | "skipped"

export type ResourceHealth = "healthy" | "degraded" | "unhealthy"

export interface TestCase {
  id: string
  name: string
  status: TestStatus
  duration: string
  lastRun: string
  message: string
}

export interface Resource {
  id: string
  name: string
  icon: AzureIconName
  /** tailwind classes for the icon chip background + foreground */
  iconClass: string
  health: ResourceHealth
  avgLatency: string
  successRate: number
  tests: TestCase[]
}
