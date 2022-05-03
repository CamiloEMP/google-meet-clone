import * as React from "react"
import { SVGProps } from "react"

const CameraIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 md:h-8 md:w-8 text-slate-200"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 9a2 2 0 0 1 2-2h.93a2 2 0 0 0 1.664-.89l.812-1.22A2 2 0 0 1 10.07 4h3.86a2 2 0 0 1 1.664.89l.812 1.22A2 2 0 0 0 18.07 7H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
    />
  </svg>
)

export default CameraIcon
