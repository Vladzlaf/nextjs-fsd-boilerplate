import { SVGProps } from 'react'

const CrossIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 54 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className || ''}`}
    {...props}
  >
    <path
      d="M2 27L27 27M27 27L52 27M27 27L27 2M27 27L27 52"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default CrossIcon
