import { SVGProps } from 'react'

const ConsultantIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
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
      d="M13.9998 13.2439C16.7339 13.2439 18.9503 10.9507 18.9503 8.12195C18.9503 5.29318 16.7339 3 13.9998 3C11.2657 3 9.04934 5.29318 9.04934 8.12195C9.04934 10.9507 11.2657 13.2439 13.9998 13.2439Z"
      fill="currentColor"
    />
    <path
      d="M14 15.8049C9.03962 15.8049 5 19.2468 5 23.4878C5 23.7746 5.21782 24 5.49505 24H22.505C22.7822 24 23 23.7746 23 23.4878C23 19.2468 18.9604 15.8049 14 15.8049Z"
      fill="currentColor"
    />
    <path
      d="M15.6011 11.3194C15.2144 10.9194 15.2144 10.2707 15.6011 9.87069C15.9877 9.47064 16.6146 9.47064 17.0013 9.87069L19.8017 12.7681C20.1883 13.1682 20.1883 13.8168 19.8017 14.2168C19.415 14.6169 18.7881 14.6169 18.4015 14.2168L15.6011 11.3194Z"
      fill="currentColor"
    />
  </svg>
)

export default ConsultantIcon
