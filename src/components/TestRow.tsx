import { useState } from "react"
import { ChevronDown } from "lucide-react"
import type { TestCase } from "@/lib/types"
import { cn } from "@/lib/utils"
import { StatusBadge } from "./StatusBadge"
import { AzureIcon, type AzureIconName } from "@/lib/azure-icons"

interface TestRowProps {
  test: TestCase
  /** resource meta is only rendered for the first test in a group */
  resourceName: string
  resourceIcon: AzureIconName
  resourceIconClass: string
  showResource: boolean
  isGroupStart: boolean
}

export function TestRow({
  test,
  resourceName,
  resourceIcon,
  resourceIconClass,
  showResource,
  isGroupStart,
}: TestRowProps) {
  const [open, setOpen] = useState(false)
  const isFailed = test.status === "failed"

  return (
    <>
      <tr
        className={cn(
          "hover:bg-muted/40",
          isGroupStart ? "border-t-2 border-border" : "border-t border-border/60",
        )}
      >
        <td className="w-52 py-3 pl-4 pr-4 align-middle">
          {showResource && (
            <div className="flex items-center gap-2.5">
              <span
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                  resourceIconClass,
                )}
              >
                <AzureIcon name={resourceIcon} className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold leading-tight text-foreground">
                {resourceName}
              </span>
            </div>
          )}
        </td>
        <td className="py-3 pr-4 align-middle">
          <span className="text-sm font-medium text-foreground">{test.name}</span>
        </td>
        <td className="py-3 pr-4 align-middle">
          <StatusBadge status={test.status} />
        </td>
        <td className="py-3 pr-4 align-middle text-sm text-muted-foreground">{test.duration}</td>
        <td className="py-3 pr-4 align-middle text-sm text-muted-foreground">{test.lastRun}</td>
        <td className="py-3 pr-4 align-middle">
          <span className={cn("text-sm", isFailed ? "font-medium text-danger" : "text-muted-foreground")}>
            {test.message}
          </span>
        </td>
        <td className="py-3 pr-4 align-middle text-right">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Collapse test details" : "Expand test details"}
            className="inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted"
          >
            <ChevronDown
              className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
              aria-hidden="true"
            />
          </button>
        </td>
      </tr>
      {open && (
        <tr className="bg-muted/30">
          <td colSpan={7} className="px-4 pb-4 pt-1">
            <dl className="grid grid-cols-2 gap-x-8 gap-y-2 rounded-lg border border-border bg-card p-4 text-sm sm:grid-cols-4">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Resource</dt>
                <dd className="mt-0.5 text-foreground">{resourceName}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Duration</dt>
                <dd className="mt-0.5 text-foreground">{test.duration}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Last Run</dt>
                <dd className="mt-0.5 text-foreground">{test.lastRun} UTC</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Status</dt>
                <dd className="mt-0.5 capitalize text-foreground">{test.status}</dd>
              </div>
              <div className="col-span-2 sm:col-span-4">
                <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Message</dt>
                <dd className={cn("mt-0.5", isFailed ? "text-danger" : "text-foreground")}>{test.message}</dd>
              </div>
            </dl>
          </td>
        </tr>
      )}
    </>
  )
}
