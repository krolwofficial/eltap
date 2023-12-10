import React, { FC, ReactElement } from "react";
import { SvgIcon } from "../../SvgIcon";
import type { IconProps } from "../../types";

export const ArrowBarIcon: FC<IconProps> = ({
  ...props
}: IconProps): ReactElement => {
  return (
    <SvgIcon {...props} viewBox={"0 0 16 16"}>
      <path
        d="M8.00008 2.66669V8.66669M10.6667 6.66669L8.47149 8.86195C8.21114 9.1223 7.78903 9.1223 7.52868 8.86195L5.33341 6.66669M13.3334 13.3334H2.66675"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        fill="none"
      />
    </SvgIcon>
  );
};
