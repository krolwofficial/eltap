import React, { FC, ReactElement } from "react";
import { SvgIcon } from "../../SvgIcon";
import type { IconProps } from "../../types";

export const BentArrowIcon: FC<IconProps> = ({
  ...props
}: IconProps): ReactElement => {
  return (
    <SvgIcon {...props} viewBox={"0 0 16 16"}>
      <path
        d="M4 10.6666V9.99998C4 8.89541 4.89543 7.99998 6 7.99998H12.6667M10.6667 10.6666L12.8619 8.47138C13.1223 8.21103 13.1223 7.78892 12.8619 7.52858L10.6667 5.33331"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        fill="none"
      />
    </SvgIcon>
  );
};
