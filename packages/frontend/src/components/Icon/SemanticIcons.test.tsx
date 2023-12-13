import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { LoadingIcon } from "./SemanticIcons";

describe("Semantic Icons", () => {
  describe("LoadingIcon", () => {
    it('should render an icon with "Loading Icon label" label', () => {
      render(<LoadingIcon />);

      expect(screen.getByLabelText("Loading Icon label")).toBeInTheDocument();
    });
  });
});
