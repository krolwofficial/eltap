import React, { FC, ReactElement } from "react";
import { SvgIcon } from "../../SvgIcon";
import type { IconProps } from "../../types";

export const ChevronIcon: FC<IconProps> = ({
  ...props
}: IconProps): ReactElement => {
  return (
    <SvgIcon {...props} size="xs" viewBox={"0 0 12 7"}>
      <path
        d="M11 1.33325L6.58926 5.744C6.26382 6.06943 5.73618 6.06943 5.41074 5.744L1 1.33325"
        stroke="#272D37"
        strokeWidth="1.67"
        strokeLinecap="round"
        fill="none"
      />
    </SvgIcon>
  );
};
