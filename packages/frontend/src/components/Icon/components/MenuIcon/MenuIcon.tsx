import React, { FC, ReactElement } from "react";
import { SvgIcon } from "../../SvgIcon";
import type { IconProps } from "../../types";

export const MenuIcon: FC<IconProps> = ({
  ...props
}: IconProps): ReactElement => {
  return (
    <SvgIcon {...props} viewBox={"0 0 16 16"}>
      <path
        d="M1 0.999268H19"
        stroke="black"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};
