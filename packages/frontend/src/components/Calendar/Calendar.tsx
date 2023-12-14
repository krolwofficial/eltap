import React, { forwardRef } from "react";
import { classNames, formatDates, noop } from "../../utils";
import { Calendar as CalendarPage } from "react-calendar";
import "react-calendar/dist/Calendar.css";

import type { CSSProperties, ComponentPropsWithRef } from "react";
import { Select } from "../Select";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export interface CalendarProps
  extends Omit<ComponentPropsWithRef<"ul">, "className"> {
  dataTestId?: string;
  isOpen?: boolean;
  style?: CSSProperties;
  setSelectedDates: any;
}

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  ({ isOpen = true, style = {}, setSelectedDates }: CalendarProps, ref) => {
    const className = classNames(
      "tw-flex tw-justify-center tw-m-0 tw-p-4 tw-overflow-auto focus:tw-outline-none tw-shadow-popover tw-transition-opacity",
      !isOpen && "tw-opacity-0"
    );

    const [value, onChange] = React.useState<Value>(new Date());
    const [selectedDate, setSelectedDate] =
      React.useState<string>("Select date range");

    React.useEffect(() => {
      value[0] &&
        value[1] &&
        (setSelectedDates([formatDates(value[0]), formatDates(value[1])]),
        setSelectedDate(`${formatDates(value[0])} - ${formatDates(value[1])}`));
    }, [value]);

    return (
      <>
        <Select items={[]} placeholder={selectedDate} onChange={noop}>
          <div className={className}>
            <CalendarPage
              allowPartialRange
              selectRange
              onChange={onChange}
              value={value}
            />
          </div>
        </Select>
      </>
    );
  }
);
Calendar.displayName = "Calendar";
