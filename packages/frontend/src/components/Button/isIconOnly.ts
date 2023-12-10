import { ReactNode } from "react";

export default function isIconOnly(props: {
  icon?: ReactNode;
  children?: ReactNode;
}): boolean {
  return !!props.icon && !props.children;
}
