import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Text } from ".";

describe("Text", () => {
  it("should render its children in a paragraph element", () => {
    render(<Text>Some content</Text>);

    expect(screen.getByText("Some content")).toBeInstanceOf(
      HTMLParagraphElement
    );
  });

  describe("appearance", () => {
    describe("primary", () => {
      it("should render with the `text-default` class", () => {
        render(<Text appearance="primary">Primary content</Text>);

        expect(screen.getByText("Primary content")).toHaveClass(
          "tw-text-default"
        );
      });
    });
  });

  describe("size", () => {
    describe("sm", () => {
      it("should render with the `text-sm` class", () => {
        render(<Text size="sm">small text</Text>);

        expect(screen.getByText("small text")).toHaveClass("tw-text-sm");
      });
    });

    describe("md", () => {
      it("should render with the `text-md` class", () => {
        render(<Text size="md">medium text</Text>);

        expect(screen.getByText("medium text")).toHaveClass("tw-text-md");
      });
    });

    describe("lg", () => {
      it("should render with the `text-lg` class", () => {
        render(<Text size="lg">large text</Text>);

        expect(screen.getByText("large text")).toHaveClass("tw-text-lg");
      });
    });
  });

  describe("width", () => {
    describe("regular", () => {
      it("should render with the `tw-font-normal` class", () => {
        render(<Text>normal text</Text>);

        expect(screen.getByText("normal text")).toHaveClass("tw-font-normal");
      });
    });

    describe("medium", () => {
      it("should render with the `tw-font-medium` class", () => {
        render(<Text weight="medium">medium text</Text>);

        expect(screen.getByText("medium text")).toHaveClass("tw-font-medium");
      });
    });

    describe("semiBold", () => {
      it("should render with the `text-semiBold` class", () => {
        render(<Text weight="semiBold">semi bold text</Text>);

        expect(screen.getByText("semi bold text")).toHaveClass(
          "tw-font-semibold"
        );
      });
    });
  });

  describe("as", () => {
    it("should render as the provided element", () => {
      render(<Text as="div">In a div</Text>);

      expect(screen.getByText("In a div")).toBeInstanceOf(HTMLDivElement);
    });
  });
});
