import { SVGProps } from 'react'

const PersonIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    fill="none"
    width="1em"
    height="1em"
    className={`${className || ''}`}
    {...props}
  >
    <path
      d="M5 4.87805C6.36704 4.87805 7.47525 3.78606 7.47525 2.43902C7.47525 1.09199 6.36704 0 5 0C3.63296 0 2.52475 1.09199 2.52475 2.43902C2.52475 3.78606 3.63296 4.87805 5 4.87805Z"
      fill="currentColor"
    />
    <path
      d="M5 6.09756C2.5198 6.09756 0.5 7.73659 0.5 9.7561C0.5 9.89268 0.608911 10 0.747525 10H9.25248C9.39109 10 9.5 9.89268 9.5 9.7561C9.5 7.73659 7.4802 6.09756 5 6.09756Z"
      fill="currentColor"
    />
  </svg>
)

export default PersonIcon
