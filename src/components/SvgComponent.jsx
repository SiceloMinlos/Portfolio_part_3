import React from "react";
import style from "/src/index.css?inline"

function SvgComponent() {
  return (
    <svg
      width="60"
      height="130"
      viewBox="0 0 190 376"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    className="mt-5"
    >
        <g id="triangles">
          <g id="Frame 1">
            <g id="darkGroup">
              <path
                id="dark2"
                opacity="0.8"
                d="M104.86 165.504C100.665 172.442 90.1779 172.442 85.9832 165.504L10.4765 40.6116C6.28144 33.6731 11.5252 25 19.9146 25L170.928 25C179.318 25 184.562 33.6731 180.367 40.6116L104.86 165.504Z"
                fill="#6366F1"
                className="animate-dark1"
              />
              <path
                id="dark1"
                opacity="0.8"
                d="M104.86 359.504C100.665 366.442 90.1779 366.442 85.9832 359.504L10.4765 234.611C6.28144 227.673 11.5252 219 19.9146 219H170.928C179.318 219 184.562 227.673 180.367 234.611L104.86 359.504Z"
                fill="#6366F1"
                className="animate-dark2"
              />
            </g>
          </g>
          <g id="lightGroup">
            <path
              id="light1"
              opacity="0.6"
              d="M106.287 256.902C102.092 263.84 91.6048 263.84 87.4101 256.902L13.4763 134.612C9.28161 127.673 14.5251 119 22.9148 119L170.782 119C179.172 119 184.415 127.673 180.22 134.612L106.287 256.902Z"
              fill="#F575D7"
            />
          </g>
        </g>
    </svg>
  );
}

export default SvgComponent;
