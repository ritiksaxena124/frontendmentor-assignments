import { FC } from "react";
import { ISVGIcon } from "../interfaces/svg-icon.type";

export const SunIcon: FC<ISVGIcon> = ({
  width = 24,
  height = 24,
  fill = "#202020",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 22 22"
    >
      <g clipPath="url(#a)">
        <path
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.98"
          d="M11 1.833v1.834m0 14.666v1.834M3.667 11H1.833m3.955-5.212L4.492 4.492m11.72 1.296 1.297-1.296M5.788 16.215l-1.296 1.296m11.72-1.296 1.297 1.296M20.167 11h-1.834m-2.75 0a4.583 4.583 0 1 1-9.167 0 4.583 4.583 0 0 1 9.167 0Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h22v22H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
