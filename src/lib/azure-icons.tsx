import type { SVGProps } from "react"

export type AzureIconName =
  | "blob-storage"
  | "ai-search"
  | "document-intelligence"
  | "postgresql"
  | "openai"
  | "redis"

export const azureIconNames: AzureIconName[] = [
  "blob-storage",
  "ai-search",
  "document-intelligence",
  "postgresql",
  "openai",
  "redis",
]

/** Azure Blob Storage – Block Blob icon */
export function BlobStorageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <defs>
        <linearGradient id="blob-a" x1="9" y1="15.834" x2="9" y2="5.788" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#32bedd" />
          <stop offset="0.775" stopColor="#32d4f5" />
        </linearGradient>
      </defs>
      <path d="M.5,5.788h17v0v9.478a.568.568,0,0,1-.568.568H1.068A.568.568,0,0,1,.5,15.266V5.788Z" fill="url(#blob-a)" />
      <path d="M1.071,2.166H16.929a.568.568,0,0,1,.568.568V5.788H.5V2.734A.568.568,0,0,1,1.071,2.166Z" fill="#0078d4" />
      <rect x="2.328" y="7.049" width="6.281" height="3.408" rx="0.283" fill="#0078d4" />
      <rect x="9.336" y="7.049" width="6.281" height="3.408" rx="0.283" fill="#fff" />
      <rect x="2.296" y="11.128" width="6.281" height="3.408" rx="0.283" fill="#0078d4" />
      <rect x="9.304" y="11.128" width="6.281" height="3.408" rx="0.283" fill="#0078d4" />
    </svg>
  )
}

/** Azure AI Search icon */
export function AiSearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <defs>
        <linearGradient id="search-a" x1="9" y1="0.36" x2="9" y2="18.31" gradientUnits="userSpaceOnUse">
          <stop offset="0.18" stopColor="#5ea0ef" />
          <stop offset="1" stopColor="#0078d4" />
        </linearGradient>
      </defs>
      <path
        d="M18,11.32a4.12,4.12,0,0,0-3.51-4,5.15,5.15,0,0,0-5.25-5,5.25,5.25,0,0,0-5,3.49A4.86,4.86,0,0,0,0,10.59a5,5,0,0,0,5.07,4.82h8.65A4.13,4.13,0,0,0,18,11.32Z"
        fill="url(#search-a)"
      />
      <path
        d="M12.33,6.59a3.07,3.07,0,0,0-5.61.85,3.16,3.16,0,0,0,.33,2.27L4.71,12.08a.79.79,0,1,0,1.12,1.12l2.33-2.36a3.08,3.08,0,0,0,4.17-4.25Zm-.54,2.1A2.16,2.16,0,0,1,9.7,10.34a1.87,1.87,0,0,1-1.21-.39,2.13,2.13,0,0,1-.56-.56,2.17,2.17,0,0,1-.31-1.73A2.14,2.14,0,0,1,9.7,6a2.18,2.18,0,0,1,1.84,1.06,2.13,2.13,0,0,1,.25,1.63Z"
        fill="#f2f2f2"
      />
      <ellipse cx="9.69" cy="8.18" rx="2.15" ry="2.16" fill="#83b9f9" />
    </svg>
  )
}

/** Azure Document Intelligence icon */
export function DocumentIntelligenceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <defs>
        <linearGradient id="docint-a" x1="7.822" y1="17.653" x2="7.822" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0078d4" />
          <stop offset="0.817" stopColor="#5ea0ef" />
        </linearGradient>
      </defs>
      <path d="M8.824.132H1.311a.594.594,0,0,0-.593.594v16.2a.594.594,0,0,0,.593.594H14.332a.594.594,0,0,0,.593-.594V6.205a.594.594,0,0,0-.593-.594H10.01a.594.594,0,0,1-.593-.594V.726A.593.593,0,0,0,8.824.132Z" fill="#83b9f9" />
      <path d="M8.55.89V4.96a1.494,1.494,0,0,0,1.491,1.493h4.1v10.31H1.5V.89H8.55M8.837,0H1.215a.6.6,0,0,0-.6.6V17.05a.6.6,0,0,0,.6.6H14.428a.6.6,0,0,0,.6-.6V6.165a.6.6,0,0,0-.6-.6H10.041a.6.6,0,0,1-.6-.6V.6a.6.6,0,0,0-.6-.6Z" fill="url(#docint-a)" />
      <path d="M14.8,5.683,9.232.132V4.655a1.022,1.022,0,0,0,1.015,1.028Z" fill="#0078d4" />
      <rect x="2.686" y="8.329" width="9.713" height="1.36" rx="0.567" fill="#fff" />
      <rect x="2.686" y="11.083" width="9.713" height="1.36" rx="0.567" fill="#fff" opacity="0.8" />
      <rect x="2.686" y="13.838" width="9.713" height="1.36" rx="0.567" fill="#fff" opacity="0.6" />
      <circle cx="13.121" cy="13.484" r="4.516" fill="#fff" />
      <path d="M12.87,9.446a4.038,4.038,0,1,1-4.037,4.038A4.042,4.042,0,0,1,12.87,9.446m0-.479a4.517,4.517,0,1,0,4.517,4.517A4.516,4.516,0,0,0,12.87,8.967Z" fill="#50e6ff" />
      <path d="M12.324,12.556v1.856l1.586.943.314-.523L13.16,13.8V12.556Z" fill="#50e6ff" />
    </svg>
  )
}

/** Azure Database for PostgreSQL icon */
export function PostgreSqlIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <defs>
        <linearGradient id="pg-a" x1="2.44" y1="10.67" x2="15.27" y2="10.67" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#005ba1" />
          <stop offset="0.52" stopColor="#0078d4" />
          <stop offset="1" stopColor="#005ba1" />
        </linearGradient>
      </defs>
      <path d="M9,5.14c-3.54,0-6.41-1-6.41-2.32V15.18c0,1.27,2.82,2.3,6.32,2.32H9c3.54,0,6.41-1,6.41-2.32V2.82C15.41,4.1,12.54,5.14,9,5.14Z" fill="url(#pg-a)" />
      <path d="M15.41,2.82c0,1.28-2.87,2.32-6.41,2.32s-6.41-1-6.41-2.32S5.46.5,9,.5s6.41,1,6.41,2.32" fill="#e8e8e8" />
      <path d="M13.91,2.63c0,.82-2.2,1.48-4.91,1.48S4.08,3.45,4.08,2.64,6.28,1.16,9,1.16s4.91.66,4.91,1.47" fill="#50e6ff" />
      <path d="M9,3a11.65,11.65,0,0,0-3.9.57A11.53,11.53,0,0,0,9,4.11a11.47,11.47,0,0,0,3.89-.58A11.93,11.93,0,0,0,9,3Z" fill="#198ab3" />
      <circle cx="13" cy="13" r="3.5" fill="#fff" />
      <path d="M13,10a3,3,0,1,0,3,3,3,3,0,0,0-3-3Zm1.27,4.51-.28.15a.19.19,0,0,1-.19,0l-1.38-.78a.35.35,0,0,1-.16-.3V12.31a.19.19,0,0,1,.09-.16l.28-.17a.18.18,0,0,1,.19,0l1.42.86a.23.23,0,0,1,.08.13.17.17,0,0,1,0,.14Z" fill="#0078d4" />
    </svg>
  )
}

/** Azure OpenAI icon */
export function OpenAiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <defs>
        <radialGradient id="oai-a" cx="-67.981" cy="793.199" r="0.45" gradientTransform="translate(-17939.03 20368.029) rotate(45) scale(25.091 -34.149)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#83b9f9" />
          <stop offset="1" stopColor="#0078d4" />
        </radialGradient>
      </defs>
      <path d="m0,2.7v12.6c0,1.491,1.209,2.7,2.7,2.7h12.6c1.491,0,2.7-1.209,2.7-2.7V2.7c0-1.491-1.209-2.7-2.7-2.7H2.7C1.209,0,0,1.209,0,2.7ZM10.8,0v3.6c0,3.976,3.224,7.2,7.2,7.2h-3.6c-3.976,0-7.199,3.222-7.2,7.198v-3.598c0-3.976-3.224-7.2-7.2-7.2h3.6c3.976,0,7.2-3.224,7.2-7.2Z" fill="url(#oai-a)" />
    </svg>
  )
}

/** Azure Redis Cache icon */
export function RedisIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <defs>
        <linearGradient id="redis-a" x1="9.5" y1="7.37" x2="17.5" y2="7.37" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#005ba1" />
          <stop offset="0.52" stopColor="#0078d4" />
          <stop offset="1" stopColor="#005ba1" />
        </linearGradient>
        <linearGradient id="redis-b" x1="0.5" y1="7.37" x2="8.5" y2="7.37" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#005ba1" />
          <stop offset="0.52" stopColor="#0078d4" />
          <stop offset="1" stopColor="#005ba1" />
        </linearGradient>
        <linearGradient id="redis-c" x1="5" y1="11.9" x2="13" y2="11.9" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#005ba1" />
          <stop offset="0.52" stopColor="#0078d4" />
          <stop offset="1" stopColor="#005ba1" />
        </linearGradient>
      </defs>
      <path d="M13.5,4.62c-2.21,0-4-.57-4-1.28v6.79c0,.69,1.76,1.26,3.95,1.27h.05c2.21,0,4-.57,4-1.27V3.34C17.5,4.05,15.71,4.62,13.5,4.62Z" fill="url(#redis-a)" />
      <path d="M17.5,3.34c0,.71-1.79,1.28-4,1.28s-4-.57-4-1.28,1.79-1.27,4-1.27,4,.57,4,1.27" fill="#e8e8e8" />
      <path d="M16.57,3.24c0,.45-1.38.81-3.07.81s-3.07-.36-3.07-.81,1.38-.81,3.07-.81,3.07.36,3.07.81" fill="#50e6ff" />
      <path d="M13.5,3.43a8.65,8.65,0,0,0-2.43.3,7.8,7.8,0,0,0,2.43.32,7.8,7.8,0,0,0,2.43-.32A8.65,8.65,0,0,0,13.5,3.43Z" fill="#32bedd" />
      <path d="M4.5,4.62c-2.21,0-4-.57-4-1.28v6.79c0,.69,1.76,1.26,4,1.27h0c2.21,0,4-.57,4-1.27V3.34C8.5,4.05,6.71,4.62,4.5,4.62Z" fill="url(#redis-b)" />
      <path d="M8.5,3.34c0,.71-1.79,1.28-4,1.28s-4-.57-4-1.28,1.79-1.27,4-1.27,4,.57,4,1.27" fill="#e8e8e8" />
      <path d="M7.57,3.24c0,.45-1.38.81-3.07.81s-3.07-.36-3.07-.81,1.38-.81,3.07-.81,3.07.36,3.07.81" fill="#50e6ff" />
      <path d="M4.5,3.43a8.65,8.65,0,0,0-2.43.3,7.8,7.8,0,0,0,2.43.32,7.8,7.8,0,0,0,2.43-.32A8.65,8.65,0,0,0,4.5,3.43Z" fill="#32bedd" />
      <path d="M9,7.37c-2.21,0-4-.57-4-1.28V13.1c0,.69,1.76,1.26,4,1.27h0c2.21,0,4-.57,4-1.27V6.09C13,6.8,11.21,7.37,9,7.37Z" fill="url(#redis-c)" />
      <path d="M13,6.09c0,.71-1.79,1.28-4,1.28S5,6.8,5,6.09s1.79-1.27,4-1.27,4,.57,4,1.27" fill="#e8e8e8" />
      <path d="M12.07,6c0,.45-1.38.81-3.07.81S5.93,6.44,5.93,6s1.38-.81,3.07-.81,3.07.36,3.07.81" fill="#50e6ff" />
      <path d="M9,6.19a8.65,8.65,0,0,0-2.43.3A7.8,7.8,0,0,0,9,6.81a7.8,7.8,0,0,0,2.43-.32A8.65,8.65,0,0,0,9,6.19Z" fill="#32bedd" />
    </svg>
  )
}

const iconMap: Record<AzureIconName, React.ComponentType<SVGProps<SVGSVGElement>>> = {
  "blob-storage": BlobStorageIcon,
  "ai-search": AiSearchIcon,
  "document-intelligence": DocumentIntelligenceIcon,
  "postgresql": PostgreSqlIcon,
  "openai": OpenAiIcon,
  "redis": RedisIcon,
}

interface AzureIconComponentProps extends SVGProps<SVGSVGElement> {
  name: AzureIconName
}

export function AzureIcon({ name, ...props }: AzureIconComponentProps) {
  const Component = iconMap[name]
  if (!Component) return null
  return <Component {...props} />
}