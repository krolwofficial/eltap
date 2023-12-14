import { classNames } from "@/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={classNames(
        "tw-mx-auto tw-w-full tw-max-w-screen-xl ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
