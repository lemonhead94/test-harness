import type { Resource } from "@/lib/types"
import { ResourceCard } from "./ResourceCard"

export function ResourceSummary({ resources }: { resources: Resource[] }) {
  return (
    <section
      aria-label="Resource summary"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
    >
      {resources.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </section>
  )
}
