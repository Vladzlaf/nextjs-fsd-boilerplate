import { SVGProps } from 'react'

const CommunityIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M20.47 18.83L20.86 21.99C20.96 22.82 20.07 23.4 19.36 22.97L15.9 20.91C15.66 20.77 15.6 20.47 15.73 20.23C16.23 19.31 16.5 18.27 16.5 17.23C16.5 13.57 13.36 10.59 9.5 10.59C8.71 10.59 7.94 10.71 7.22 10.95C6.85 11.07 6.49 10.73 6.58 10.35C7.49 6.71 10.99 4 15.17 4C20.05 4 24 7.69 24 12.24C24 14.94 22.61 17.33 20.47 18.83Z"
      fill="currentColor"
    />
    <path
      d="M15 17.23C15 18.42 14.56 19.52 13.82 20.39C12.83 21.59 11.26 22.36 9.5 22.36L6.89 23.91C6.45 24.18 5.89 23.81 5.95 23.3L6.2 21.33C4.86 20.4 4 18.91 4 17.23C4 15.47 4.94 13.92 6.38 13C7.27 12.42 8.34 12.09 9.5 12.09C12.54 12.09 15 14.39 15 17.23Z"
      fill="currentColor"
    />
  </svg>
)

export default CommunityIcon
