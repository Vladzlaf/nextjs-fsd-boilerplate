import { SVGProps } from 'react'

const LocationIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
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
      d="M5.81735 2.42015V10.6698M10.1826 4.08276V12.5735M2 4.81888V10.9934C2 12.1991 2.82192 12.6941 3.8204 12.0976L5.25114 11.2472C5.56164 11.0632 6.07915 11.0442 6.40183 11.2155L9.59817 12.8845C9.92085 13.0494 10.4384 13.0368 10.7489 12.8527L13.3851 11.279C13.7199 11.0759 14 10.5809 14 10.1748V4.00027C14 2.79455 13.1781 2.29958 12.1796 2.89609L10.7489 3.74643C10.4384 3.93046 9.92085 3.9495 9.59817 3.77816L6.40183 2.11555C6.07915 1.95056 5.56164 1.96325 5.25114 2.14728L2.61492 3.72105C2.27397 3.92412 2 4.41909 2 4.81888Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default LocationIcon
