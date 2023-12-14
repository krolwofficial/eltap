import React from "react";
import { ProgressCircleIcon } from "./components/ProgressCircleIcon";
import { ChevronIcon } from "./components/ChevronIcon";

export type SemanticIconProps = Omit<any, "children">;

export interface MenuIconProps extends SemanticIconProps {
  isOpen?: boolean;
  buttonType?: "default" | "form-select" | "icon-only";
  addClassName?: string;
}

export const MenuIcon = ({
  isOpen,
  buttonType,
  addClassName,
  ...iconProps
}: MenuIconProps) => {
  return (
    <span className={addClassName}>
      <ChevronIcon
        {...iconProps}
        className={`tw-transform tw-transition-transform tw-duration-0 ${
          isOpen && "tw-rotate-180"
        }`}
      />
    </span>
  );
};

export const LoadingIcon = ({ ...iconProps }: SemanticIconProps) => {
  return (
    <ProgressCircleIcon
      className="tw-animate-spin"
      {...iconProps}
      ariaLabel={"Loading Icon label"}
    />
  );
};
