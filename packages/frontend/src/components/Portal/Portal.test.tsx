import React from "react";
import "@testing-library/jest-dom";
import { Portal } from ".";
import { render, screen } from "@testing-library/react";

describe("Portal", () => {
  it("should render its children", async () => {
    render(<Portal>Content</Portal>);
    expect(await screen.findByText("Content")).toBeInTheDocument();
  });
});
