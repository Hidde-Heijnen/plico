import {
  Book,
  Check,
  Download,
  Home,
  LucideIcon,
  LucideProps,
  Mic,
  Pause,
  Pencil,
  SendHorizonal,
  Settings,
  Trash2,
  X,
} from "lucide-react"

import { cn } from "@/lib/utils"

export type Icon = LucideIcon

export const Icons = {
  Close: X,
  Logo: ({ ...props }: LucideProps) => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 0C22.3858 0 0 22.3858 0 50V95.2336C0 97.866 2.13401 100 4.76644 100H50C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0ZM33.666 22.5896C33.1962 22.4514 32.7037 22.4219 32.2251 22.5H30C28.0109 22.5 26.1032 23.2902 24.6967 24.6967C23.2902 26.1032 22.5 28.0109 22.5 30V42.5C22.5 47.1413 24.3437 51.5925 27.6256 54.8744C30.3125 57.5612 33.783 59.2841 37.5 59.8206V60C37.5 64.6413 39.3437 69.0925 42.6256 72.3744C45.9075 75.6563 50.3587 77.5 55 77.5C59.6413 77.5 64.0925 75.6563 67.3744 72.3744C70.6563 69.0925 72.5 64.6413 72.5 60V52.0732C75.413 51.0436 77.5 48.2655 77.5 45C77.5 40.8579 74.1421 37.5 70 37.5C65.8579 37.5 62.5 40.8579 62.5 45C62.5 48.2655 64.587 51.0436 67.5 52.0732V60C67.5 63.3152 66.183 66.4946 63.8388 68.8388C61.4946 71.183 58.3152 72.5 55 72.5C51.6848 72.5 48.5054 71.183 46.1612 68.8388C43.817 66.4946 42.5 63.3152 42.5 60V59.8206C46.217 59.2841 49.6875 57.5612 52.3744 54.8744C55.6563 51.5925 57.5 47.1413 57.5 42.5V30C57.5 28.0109 56.7098 26.1032 55.3033 24.6967C53.8968 23.2902 51.9891 22.5 50 22.5H47.5C46.837 22.5 46.2011 22.7634 45.7322 23.2322C45.4508 23.5136 45.2276 23.8477 45.0753 24.2153C44.9231 24.5829 44.8447 24.977 44.8447 25.375C44.8447 25.773 44.9231 26.167 45.0753 26.5346C45.2276 26.9023 45.4508 27.2363 45.7322 27.5178C46.0136 27.7992 46.3477 28.0224 46.7153 28.1746C47.083 28.3269 47.477 28.4053 47.875 28.4053C48.273 28.4053 48.667 28.3269 49.0347 28.1746C49.4023 28.0224 49.7364 27.7992 50.0178 27.5178L50.0351 27.5002C50.6855 27.5094 51.3072 27.7717 51.7678 28.2322C52.2366 28.7011 52.5 29.3369 52.5 30V42.5C52.5 45.8152 51.183 48.9946 48.8388 51.3388C46.4946 53.683 43.3152 55 40 55C36.6848 55 33.5054 53.683 31.1612 51.3388C28.817 48.9946 27.5 45.8152 27.5 42.5V30C27.5 29.3369 27.7634 28.7011 28.2322 28.2322C28.7011 27.7634 29.337 27.5 30 27.5H30.0378C30.0954 27.5871 30.1573 27.6717 30.2235 27.7533C30.6527 28.2831 31.2376 28.6645 31.8955 28.8435C32.5534 29.0225 33.2509 28.9901 33.8893 28.7508C34.5277 28.5116 35.0748 28.0776 35.453 27.5103C35.8312 26.943 36.0214 26.2711 35.9967 25.5898C35.972 24.9085 35.7336 24.2521 35.3153 23.7137C34.8971 23.1753 34.3201 22.782 33.666 22.5896ZM67.5 45C67.5 43.6193 68.6193 42.5 70 42.5C71.3807 42.5 72.5 43.6193 72.5 45C72.5 46.3807 71.3807 47.5 70 47.5C68.6193 47.5 67.5 46.3807 67.5 45Z"
      />
    </svg>
  ),
  NavCollapseIcon: ({
    collapsed,
    ...props
  }: LucideProps & { collapsed: boolean }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="15" x2="15" y1="3" y2="21" />
      <path
        className={cn(
          collapsed ? "rotate-0" : "rotate-180",
          "transition-transform duration-500 ease-in-out"
        )}
        style={{ transformOrigin: "40%" }}
        d="m8 9 3 3-3 3"
      />
    </svg>
  ),
  Mic: Mic,
  Pause: Pause,
  Trash: Trash2,
  Download: Download,
  Edit: Pencil,
  Summarize: SendHorizonal,
  Settings: Settings,
  Check: Check,
  Home: Home,
  Docs: Book,
}
