import * as React from "react"
const Divider = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1200}
    height={2}
    fill="none"
    {...props}
  >
    <path stroke="#FAA944" strokeWidth={2} d="M0 1h120" />
    <path stroke="#9E67E5" d="M120 1.5h1080" opacity={0.25} />
  </svg>
)
export default Divider
