import { classNames } from "@/utils";
import { ReactNode } from "react";

const RowWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={classNames(
        "tw-px-6 tw-max-w-[1600px] lg:tw-px-24 tw-w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export default RowWrapper;
