import React, { forwardRef, ReactNode, useEffect, useRef } from "react";
import { classNames, mergeRefs, testIdGen } from "../../utils";
import { MenuIcon } from "../Icon";
import isIconOnly from "./isIconOnly";
import validateProps from "./validateProps";

import type { ButtonHTMLAttributes } from "react";
import { Text } from "../Typography";

export type ButtonAppearances = "primary" | "iconOnly";

const buttonSizes = {
  lg: "tw-text-base tw-h-10",
  md: "tw-text-xs tw-h-8",
  sm: "tw-text-xs tw-h-6",
};

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  addClassName?: string;
  appearance?: ButtonAppearances;
  buttonPosition?: "left" | "middle" | "right";
  dataTestId?: string;
  disabled?: boolean;
  iconOnly?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconAfter?: ReactNode;
  isFixed?: boolean;
  isMenu?: boolean;
  /**
   * Use with `isMenu`, determines the direction of the menu item
   */
  isOpen?: boolean;
  size?: keyof typeof buttonSizes;
  buttonType?: "default" | "form-select" | "icon-only";
}

const defaultProps: Partial<ButtonProps> = {
  appearance: "primary",
  isMenu: false,
  size: "md",
  disabled: false,
  buttonType: "default",
};

function makeClassName(props: ButtonProps): string {
  const {
    addClassName,
    disabled,
    icon,
    iconAfter,
    fullWidth,
    isMenu,
    isOpen,
    size = "md",
    appearance = "primary",
    buttonType = "default",
  } = props;

  const defaultClassNames = classNames(
    "tw-cursor-pointer tw-whitespace-nowrap tw-rounded tw-leading-none tw-outline-none tw-flex tw-items-center tw-relative tw-box-content "
  );

  const sizeClassName = {
    sm: "tw-px-3 tw-py-2 tw-h-5",
    md: "tw-px-2.5 tw-py-4 tw-h-1.5",
    lg: "tw-px-4 tw-py-4.5 tw-h-1.5",
  }[size];

  const typeClassName: Record<ButtonAppearances, string> = {
    primary: classNames("tw-border-solid tw-border-neutral-700 tw-border"),
    iconOnly: classNames("tw-border-none"),
  };

  return classNames(
    addClassName,
    defaultClassNames,
    sizeClassName,
    disabled ? "tw-cursor-not-allowed" : null,
    typeClassName[appearance],
    fullWidth ? "tw-w-full tw-flex-1" : null,
    isMenu && isOpen && "tw-z-10"
  );
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, userRef) => {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const {
      addClassName,
      appearance,
      buttonPosition,
      fullWidth,
      children,
      dataTestId,
      disabled,
      icon,
      iconAfter,
      isFixed,
      isMenu,
      isOpen,
      size,
      buttonType,
      ...rest
    } = props;
    /* eslint-enable @typescript-eslint/no-unused-vars */

    validateProps(props);
    const className = makeClassName(props);
    const ariaProps = isMenu ? { ["aria-expanded"]: isOpen } : {};
    const buttonRef = useRef<HTMLButtonElement>(null);
    const ref = mergeRefs([buttonRef, userRef]);

    return (
      <button
        data-testid={
          dataTestId ||
          `button-${typeof children === "string" && testIdGen(children)}`
        }
        ref={ref}
        type="button"
        {...ariaProps}
        {...rest}
        disabled={disabled}
        className={className}
      >
        {icon && (
          <span
            className={classNames(
              "tw-w-5 tw-h-5 tw-grid tw-items-center tw-justify-items-center",
              isIconOnly(props) ? "tw-w-4" : "tw-mr-1.5"
            )}
          >
            {icon}
          </span>
        )}
        <Text size="sm">{children}</Text>
        {iconAfter && (
          <span
            className={classNames(
              "tw-w-5 tw-h-5 tw-grid tw-items-center tw-justify-items-center tw-ml-1.5"
            )}
          >
            {iconAfter}
          </span>
        )}
        {isMenu && <MenuIcon isOpen={isOpen} buttonType={buttonType} />}
      </button>
    );
  }
);

Button.defaultProps = defaultProps;
Button.displayName = "Button";
