import { SVGProps } from 'react'

const FlagIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
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
      d="M4 2V14M4 3.2H10.5373C12.1132 3.2 12.4634 4.1 11.3544 5.24L10.654 5.96C10.1871 6.44 10.1871 7.22 10.654 7.64L11.3544 8.36C12.4634 9.5 12.0549 10.4 10.5373 10.4H4"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default FlagIcon
