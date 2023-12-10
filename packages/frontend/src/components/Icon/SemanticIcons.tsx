import React from "react";
import { classNames } from "../../utils";

export type SemanticIconProps = Omit<any, "children">;

export interface MenuIconProps extends SemanticIconProps {
  isOpen?: boolean;
  buttonType?: "default" | "form-select";
}

export const MenuIcon = ({
  isOpen,
  buttonType,
  ...iconProps
}: MenuIconProps) => {
  return (
    <span
      className={classNames(
        "tw-ml-1 tw-w-5 tw-h-5 tw-grid tw-items-center tw-justify-items-center",
        buttonType == "form-select" && "tw-absolute tw-right-1.5"
      )}
    >
      {/* <CaretDownIcon
        ariaLabel={"Menu Icon Label"}}
        size="xs"
        {...iconProps}
        className={`tw-transform tw-transition-transform tw-duration-200 ${
          isOpen && "tw-rotate-180"
        }`}
      /> */}
    </span>
  );
};
MenuIcon.displayName = "MenuIcon";
