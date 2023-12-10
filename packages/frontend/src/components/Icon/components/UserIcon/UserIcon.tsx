import React, { FC, ReactElement } from "react";
import { SvgIcon } from "../../SvgIcon";
import type { IconProps } from "../../types";

export const UserIcon: FC<IconProps> = ({
  ...props
}: IconProps): ReactElement => {
  return (
    <SvgIcon {...props} viewBox={"0 0 16 16"}>
      <rect
        x="0.951555"
        y="4.46855"
        width="10.5"
        height="10.5"
        transform="rotate(-18.784 0.951555 4.46855)"
        stroke="black"
        stroke-width="1.5"
        fill="none"
      />
    </SvgIcon>
  );
};
