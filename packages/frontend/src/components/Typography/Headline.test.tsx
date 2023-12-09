import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Headline } from ".";

describe("Headline", () => {
  it("should render its children", () => {
    render(<Headline level={2}>A Headline</Headline>);

    expect(screen.getByText("A Headline")).toBeInTheDocument();
  });

  describe("level", () => {
    describe("1", () => {
      it("should render an `h1` element", () => {
        render(<Headline level={1}>A Headline</Headline>);

        const el = screen.getByText("A Headline");
        expect(el).toBeInstanceOf(HTMLHeadingElement);
        expect(el.nodeName).toBe("H1");
      });
    });

    describe("2", () => {
      it("should render an `h2` element", () => {
        render(<Headline level={2}>A Headline</Headline>);

        const el = screen.getByText("A Headline");
        expect(el).toBeInstanceOf(HTMLHeadingElement);
        expect(el.nodeName).toBe("H2");
      });
    });

    describe("3", () => {
      it("should render an `h3` element", () => {
        render(<Headline level={3}>A Headline</Headline>);

        const el = screen.getByText("A Headline");
        expect(el).toBeInstanceOf(HTMLHeadingElement);
        expect(el.nodeName).toBe("H3");
      });
    });

    describe("4", () => {
      it("should render an `h4` element", () => {
        render(<Headline level={4}>A Headline</Headline>);

        const el = screen.getByText("A Headline");
        expect(el).toBeInstanceOf(HTMLHeadingElement);
        expect(el.nodeName).toBe("H4");
      });
    });

    describe("5", () => {
      it("should render an `h5` element", () => {
        render(<Headline level={5}>A Headline</Headline>);

        const el = screen.getByText("A Headline");
        expect(el).toBeInstanceOf(HTMLHeadingElement);
        expect(el.nodeName).toBe("H5");
      });
    });

    describe("6", () => {
      it("should render an `h6` element", () => {
        render(<Headline level={6}>A Headline</Headline>);

        const el = screen.getByText("A Headline");
        expect(el).toBeInstanceOf(HTMLHeadingElement);
        expect(el.nodeName).toBe("H6");
      });
    });
  });

  describe("size", () => {
    describe("xxs", () => {
      it("should render with the `tw-text-base` class", () => {
        render(
          <Headline level={2} size="xxs">
            Headline xxS
          </Headline>
        );

        expect(screen.getByText("Headline xxS")).toHaveClass("tw-text-base");
      });
    });

    describe("xs", () => {
      it("should render with the `tw-text-2xl` class", () => {
        render(
          <Headline level={2} size="xs">
            Headline xS
          </Headline>
        );

        expect(screen.getByText("Headline xS")).toHaveClass("tw-text-2xl");
      });
    });

    describe("md", () => {
      it("should render with the `tw-text-4xl` class", () => {
        render(
          <Headline level={2} size="md">
            Headline M
          </Headline>
        );

        expect(screen.getByText("Headline M")).toHaveClass("tw-text-4xl");
      });
    });

    describe("lg", () => {
      it("should render with the `tw-text-5xl` class", () => {
        render(
          <Headline level={2} size="lg">
            Headline L
          </Headline>
        );

        expect(screen.getByText("Headline L")).toHaveClass("tw-text-5xl");
      });
    });

    describe("xl", () => {
      it("should render with the `tw-text-6xl` class", () => {
        render(
          <Headline level={2} size="xl">
            Headline xL
          </Headline>
        );

        expect(screen.getByText("Headline xL")).toHaveClass("tw-text-6xl");
      });
    });
  });
});
