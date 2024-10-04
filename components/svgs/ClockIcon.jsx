const ClockIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      fill="none"
      {...props}
    >
      <path
        stroke="#50E6FF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M44 24c0 11.04-8.96 20-20 20S4 35.04 4 24 12.96 4 24 4s20 8.96 20 20Z"
      />
      <path
        stroke="#50E6FF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="m31.42 30.36-6.2-3.7c-1.08-.64-1.96-2.18-1.96-3.44v-8.2"
      />
    </svg>
  );
};

export default ClockIcon;
