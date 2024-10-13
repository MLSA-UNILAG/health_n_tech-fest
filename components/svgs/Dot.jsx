import * as React from "react"
const Dot = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 8 8"
    {...props}
  >
    <circle cx={4} cy={4.5} r={4} fill="#00B6DC" />
  </svg>
)
export default Dot