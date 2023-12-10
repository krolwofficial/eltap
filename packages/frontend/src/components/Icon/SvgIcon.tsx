import React, { FC, ReactElement, ReactNode } from "react";

export type IconSize =
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl"
  | "3xl"
  | "4xl"
  | "5xl";

export type SvgIconProps = {
  className?: string;
  /**
   * Removing the Icon from the accessibility tree
   */
  ariaHidden?: boolean;
  ariaLabel?: string;
  size?: IconSize;
  focusable?: boolean;
  /**
   * Any ReactNode passed in as child to the svg
   */
  /**
   * It is used to scale the Icon
   */
  viewBox?: string;
  children: ReactNode | ReactNode[];
};

const iconSizes: Record<IconSize, string> = {
  xxs: "10",
  xs: "12",
  sm: "14",
  md: "16",
  lg: "20",
  xl: "24",
  xxl: "28",
  "3xl": "32",
  "4xl": "40",
  "5xl": "48",
};

export const SvgIcon: FC<SvgIconProps> = ({
  size = "md",
  ariaHidden = true,
  ariaLabel,
  className,
  children,
  viewBox,
  focusable = false,
  ...passThrough
}: SvgIconProps): ReactElement => {
  const width = iconSizes[size];
  const height = iconSizes[size];

  const SvgProps = {
    viewBox: viewBox,
    "aria-label": ariaLabel,
    "aria-hidden": ariaHidden,
    className: `tw-fill-current${className ? ` ${className}` : ""}`,
    height: `${height}px`,
    width: `${width}px`,
    focusable: focusable,
  };

  return (
    <svg role="img" {...SvgProps} {...passThrough}>
      {children}
    </svg>
  );
};
