import React from "react";

const Logo = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.7002 3.10739L8.5892 6.99639L4.7002 10.8854L5.4072 11.5934L10.0042 6.99639L5.4072 2.40039L4.7002 3.10739Z"
        fill="#919191"
      />
    </svg>
  );
};

export default React.memo(Logo);
