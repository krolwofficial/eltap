import React, { forwardRef } from "react";
import { classNames, formatDates } from "../../utils";
import { Calendar as CalendarPage } from "react-calendar";
import "react-calendar/dist/Calendar.css";

import type { CSSProperties, ComponentPropsWithRef } from "react";
import { Select } from "../Select";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type DateRange = [Date, Date];

export interface CalendarProps
  extends Omit<ComponentPropsWithRef<"ul">, "className"> {
  dataTestId?: string;
  /**
   * Shows if the List is visible.
   */
  isOpen?: boolean;
  /**
   * Apply custom styles to the Calendar.
   */
  style?: CSSProperties;
  setSelectedDates: any;
}

/**
 * Displays a list of elements to the user.
 *
 * This component is not used directly. Used for Select.
 */

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  ({ isOpen = true, style = {}, setSelectedDates }: CalendarProps, ref) => {
    const className = classNames(
      "tw-flex tw-justify-center tw-m-0 tw-p-4 tw-overflow-auto focus:tw-outline-none tw-shadow-popover tw-transition-opacity",
      !isOpen && "tw-opacity-0"
    );

    const [value, onChange] = React.useState<Value>(new Date());
    const [selectedDate, setSelectedDate] = React.useState({ id: "" });

    const formatDay = (date) => {
      if (!date) return "";
      const year = date.getFullYear();
      const month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are 0-based in JavaScript
      const day = ("0" + date.getDate()).slice(-2);
      return `${year}-${month}-${day}`;
    };

    React.useEffect(() => {
      value[0] &&
        value[1] &&
        setSelectedDates([formatDay(value[0]), formatDay(value[1])]);
    }, [value]);

    return (
      <>
        <Select
          items={[]}
          placeholder={"Pick item nr"}
          // selectedItem={selectedDate}
          onChange={({ selectedItem }) => {}}
        >
          <div className={className}>
            <CalendarPage
              allowPartialRange
              selectRange
              onChange={onChange}
              value={value}
              // formatDay={(date) => {
              //   const year = date.getFullYear();
              //   const month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are 0-based in JavaScript
              //   const day = ("0" + date.getDate()).slice(-2);
              //   return `${year}-${month}-${day}`;
              // }}
            />
            <p className="text-center">
              <span className="bold">Start:</span> {formatDay(value[0])}
              &nbsp;|&nbsp;
              <span className="bold">End:</span> {formatDay(value[1])}
            </p>
          </div>
        </Select>
      </>
    );
  }
);
Calendar.displayName = "Calendar";
