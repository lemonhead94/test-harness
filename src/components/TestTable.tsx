import type { Resource } from "@/lib/types"
import { TestRow } from "./TestRow"

interface TestTableProps {
  /** groups already filtered; each keeps its resource meta + visible tests */
  groups: Resource[]
}

const columns = ["Resource", "Test", "Status", "Duration", "Last Run", "Message", ""]

export function TestTable({ groups }: TestTableProps) {
  const visibleGroups = groups.filter((g) => g.tests.length > 0)

  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
      <table className="w-full min-w-[880px] border-collapse text-left">
        <thead>
          <tr className="border-b border-border bg-muted/30">
            {columns.map((col, i) => (
              <th
                key={col || `col-${i}`}
                scope="col"
                className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {visibleGroups.length === 0 && (
            <tr>
              <td colSpan={7} className="px-4 py-12 text-center text-sm text-muted-foreground">
                No tests match your filters.
              </td>
            </tr>
          )}

          {visibleGroups.map((group) =>
            group.tests.map((test, index) => (
              <TestRow
                key={test.id}
                test={test}
                resourceName={group.name}
                resourceIcon={group.icon}
                resourceIconClass={group.iconClass}
                showResource={index === 0}
                isGroupStart={index === 0}
              />
            )),
          )}
        </tbody>
      </table>
    </div>
  )
}
