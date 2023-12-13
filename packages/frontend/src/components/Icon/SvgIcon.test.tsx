import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SvgIcon } from "./SvgIcon";

describe("SvgIcon", () => {
  it("should render an svg", () => {
    render(
      <SvgIcon ariaLabel="My Icon">
        <path d="M8.087 12.065l-2.07-2.07a.594.594 0 10-.842.84l2.494 2.496a.594.594 0 00.842 0l6.314-6.315a.594.594 0 10-.841-.841l-5.897 5.89z" />
      </SvgIcon>
    );
    expect(screen.getByLabelText("My Icon")).toBeInTheDocument();
  });

  it("should allow adding custom classes", () => {
    render(
      <SvgIcon ariaLabel="My Icon" className="my-class">
        <path d="M8.087 12.065l-2.07-2.07a.594.594 0 10-.842.84l2.494 2.496a.594.594 0 00.842 0l6.314-6.315a.594.594 0 10-.841-.841l-5.897 5.89z" />
      </SvgIcon>
    );
    expect(
      screen.getByLabelText("My Icon").classList.contains("my-class")
    ).toBe(true);
  });

  it("should set an aria-label", () => {
    render(
      <SvgIcon ariaLabel="aria-label is for assistive technologies">
        <path d="M8.087 12.065l-2.07-2.07a.594.594 0 10-.842.84l2.494 2.496a.594.594 0 00.842 0l6.314-6.315a.594.594 0 10-.841-.841l-5.897 5.89z" />
      </SvgIcon>
    );
    expect(
      screen.getByLabelText("aria-label is for assistive technologies")
    ).toBeInTheDocument();
  });

  it("should pass additional props to the svg element", () => {
    render(
      <SvgIcon data-testid="test-icon" data-metrics="test-me">
        <path d="M8.087 12.065l-2.07-2.07a.594.594 0 10-.842.84l2.494 2.496a.594.594 0 00.842 0l6.314-6.315a.594.594 0 10-.841-.841l-5.897 5.89z" />
      </SvgIcon>
    );
    expect(
      screen.getByTestId("test-icon").getAttribute("data-metrics")
    ).toEqual("test-me");
  });

  it("should set focusable attribute", () => {
    render(
      <SvgIcon data-testid="test-icon" focusable={true}>
        <path d="M8.087 12.065l-2.07-2.07a.594.594 0 10-.842.84l2.494 2.496a.594.594 0 00.842 0l6.314-6.315a.594.594 0 10-.841-.841l-5.897 5.89z" />
      </SvgIcon>
    );
    expect(screen.getByTestId("test-icon").getAttribute("focusable")).toEqual(
      "true"
    );
  });
});
