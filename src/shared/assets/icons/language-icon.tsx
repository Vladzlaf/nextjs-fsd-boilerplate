import { SVGProps } from 'react'

const LanguageIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    width="1em"
    height="1em"
    className={`${className || ''}`}
    {...props}
  >
    <path
      d="M3.8 5.6L7.4 9.2M3.2 9.2L6.8 5.6L8 3.8M2 3.8H9.2M5 2H5.6M14 14L11 8L8 14M9.2 11.6H12.8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default LanguageIcon
