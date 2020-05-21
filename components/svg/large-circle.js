import * as React from "react";

function LargeCircle(props) {
  return (
    <svg
      width={1135}
      height={1135}
      viewBox="0 0 1135 1135"
      fill="none"
      {...props}
    >
      <g filter="url(#prefix__filter0_d)">
        <circle cx={567.5} cy={563.5} r={517.5} fill="#2F80ED" />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d"
          x={0}
          y={0}
          width={1135}
          height={1135}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={25} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default LargeCircle;
