import React, { forwardRef } from "react";
import { classNames } from "../../utils";
import { Calendar as CalendarPage } from "react-calendar";
import "react-calendar/dist/Calendar.css";

import type { CSSProperties, ComponentPropsWithRef } from "react";
import { Select } from "../Select";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

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
}

/**
 * Displays a list of elements to the user.
 *
 * This component is not used directly. Used for Select.
 */

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  ({ isOpen = true, style = {} }: CalendarProps, ref) => {
    const className = classNames(
      "tw-flex tw-justify-center tw-m-0 tw-p-4 tw-overflow-auto focus:tw-outline-none tw-shadow-popover tw-transition-opacity",
      !isOpen && "tw-opacity-0"
    );

    const [value, onChange] = React.useState<Value>(new Date());
    const [selectedDate, setSelectedDate] = React.useState({ id: "" });

    React.useEffect(() => {
      console.log(value);
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
            />
          </div>
        </Select>
      </>
    );
  }
);
Calendar.displayName = "Calendar";
