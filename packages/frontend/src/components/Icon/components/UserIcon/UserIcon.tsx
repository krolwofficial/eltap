import React, { FC, ReactElement } from "react";
import { SvgIcon } from "../../SvgIcon";
import type { IconProps } from "../../types";

export const UserIcon: FC<IconProps> = ({
  ...props
}: IconProps): ReactElement => {
  return (
    <SvgIcon {...props} viewBox={"0 0 16 16"}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.3 6.65017V6.65C16.3 5.73032 16.0273 4.83129 15.5163 4.0666C15.0054 3.30191 14.2792 2.70591 13.4295 2.35396C12.5798 2.00201 11.6448 1.90993 10.7428 2.08935C9.8408 2.26877 9.01227 2.71164 8.36196 3.36196C7.71164 4.01227 7.26877 4.84082 7.08935 5.74283C6.90993 6.64484 7.00201 7.5798 7.35396 8.42948C7.70591 9.27915 8.30191 10.0054 9.0666 10.5163C9.8313 11.0273 10.7303 11.3 11.65 11.3V11.15L11.6502 11.3C12.883 11.2986 14.0649 10.8083 14.9366 9.9366C15.8083 9.06487 16.2986 7.88296 16.3 6.65017ZM9.9277 4.07245C10.4375 3.73183 11.0368 3.55002 11.6499 3.55C12.4718 3.55098 13.2598 3.8779 13.8409 4.45907C14.4221 5.04022 14.749 5.82814 14.75 6.65C14.75 7.26312 14.5682 7.86248 14.2276 8.37227C13.8869 8.88206 13.4028 9.2794 12.8363 9.514C12.2699 9.7487 11.6466 9.81 11.0452 9.6904C10.4439 9.5708 9.8915 9.27557 9.45797 8.84203C9.02443 8.40849 8.72918 7.85612 8.60957 7.25478C8.48995 6.65344 8.55134 6.03013 8.78598 5.46368C9.02061 4.89723 9.41794 4.41308 9.9277 4.07245Z"
          fill="black"
          stroke="black"
          stroke-width="0.5"
        />
        <path
          d="M3 19.4513V19.4515V21.0168C3 21.2242 3.08193 21.4234 3.22805 21.5703C3.37419 21.7173 3.57258 21.8 3.77963 21.8C3.98668 21.8 4.18507 21.7173 4.33121 21.5703C4.47733 21.4234 4.55926 21.2242 4.55926 21.0168V19.4517C4.55926 19.4516 4.55926 19.4516 4.55926 19.4515C4.56058 18.2887 5.0205 17.174 5.83787 16.352C6.65524 15.5299 7.76327 15.0677 8.91883 15.0664H14.3812C15.5367 15.0677 16.6448 15.5299 17.4621 16.352C18.2795 17.174 18.7395 18.2887 18.7407 19.4517V21.0168C18.7407 21.2242 18.8227 21.4234 18.9688 21.5703C19.1149 21.7173 19.3133 21.8 19.5204 21.8C19.7274 21.8 19.9258 21.7173 20.072 21.5703C20.2181 21.4234 20.3 21.2242 20.3 21.0168V19.4515V19.4513C20.2981 17.8737 19.6741 16.361 18.5645 15.2453C17.4549 14.1295 15.9504 13.5017 14.3809 13.5H14.3807H8.91867H8.91849C7.34911 13.5019 5.84472 14.1297 4.73526 15.2455C3.62583 16.3612 3.00188 17.8738 3 19.4513Z"
          fill="black"
          stroke="black"
          stroke-width="0.5"
        />
      </svg>
    </SvgIcon>
  );
};
