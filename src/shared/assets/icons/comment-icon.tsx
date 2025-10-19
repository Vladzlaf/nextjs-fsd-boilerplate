import { SVGProps } from 'react'

const CommentIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    width="1em"
    height="1em"
    className={`${className || ''}`}
    {...props}
  >
    <path
      d="M4 10.8362C4 12.5346 4.64 14.1046 5.71636 15.3464C7.15636 17.0591 9.44 18.1581 12 18.1581L15.7964 20.3704C16.4364 20.7557 17.2509 20.2276 17.1636 19.4997L16.8 16.688C18.7491 15.3606 20 13.234 20 10.8362C20 8.32418 18.6327 6.11191 16.5382 4.79882C15.2436 3.971 13.6873 3.5 12 3.5C7.57818 3.5 4 6.78273 4 10.8362Z"
      fill="currentColor"
    />
  </svg>
)

export default CommentIcon
