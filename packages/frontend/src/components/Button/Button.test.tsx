import React from "react";
import { UserIcon } from "../Icon/components/UserIcon/UserIcon";
import { Button } from ".";
import { fireEvent, render, screen } from "../../utils/testRenderer";
import Image from "next/image";

// function TestIcon() {
//   return <Image src={UserIcon} alt="my profile" width="64" height="64" />;
// }

function TestIcon() {
  return <UserIcon />;
}

describe("Button", () => {
  describe("when passing a label in children", () => {
    it("should render the label", () => {
      render(
        <Button size="lg" appearance="primary" isFixed>
          Primary
        </Button>
      );
      expect(screen.getByText("Primary")).toBeInTheDocument();
      expect(screen.getByText("Primary")).toHaveClass("tw-w-22");
    });
  });

  describe("when passing a label and an icon", () => {
    it("should render the label and icon", () => {
      render(<Button icon={<TestIcon />}>With Icon</Button>);

      // The icon is only decorative, so should be `aria-hidden`.
      expect(screen.getByRole("img", { hidden: true })).toBeInTheDocument();
      expect(screen.getByText("With Icon")).toBeInTheDocument();
    });
  });

  describe("type", () => {
    it("should have default type of button", () => {
      render(<Button isMenu></Button>);
      expect(screen.getByRole("button")).toHaveAttribute("type", "button");
      expect(screen.getByRole("button")).toHaveTextContent("");
    });

    it("should allow overriding default type", () => {
      render(<Button type="submit">Foo</Button>);

      expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
    });
  });

  describe("when passing an icon only", () => {
    it("should throw an error if no label is provided", () => {
      jest.spyOn(console, "error").mockImplementation();
      expect(() => {
        render(<Button icon={<TestIcon />} />);
      }).toThrow();
    });

    it("should render the label and icon", () => {
      render(<Button icon={<TestIcon />} aria-label="Screen Reader Label" />);

      // The icon is only decorative, so should be `aria-hidden`.
      expect(screen.getByRole("img", { hidden: true })).toBeInTheDocument();
      expect(screen.getByLabelText("Screen Reader Label")).toBeInTheDocument();
    });

    it("should support adding a label via the `aria-labeledby` attribute", () => {
      render(
        <>
          <label id="label-id">Button Label</label>
          <Button icon={<TestIcon />} aria-labelledby="label-id" />
        </>
      );

      // The icon is only decorative, so should be `aria-hidden`.
      expect(screen.getByRole("img", { hidden: true })).toBeInTheDocument();
      expect(screen.getByLabelText("Button Label")).toBeInTheDocument();
    });
  });

  describe("when passing `isMenu`", () => {
    it("should render the label and menu icon", () => {
      render(<Button isMenu>Menu Button</Button>);

      // The menu icon is decoration only, so should be `aria-hidden`.
      expect(screen.getByLabelText("Menu Icon")).toBeInTheDocument();
      expect(screen.getByText("Menu Button")).toBeInTheDocument();
    });

    it("should render a menu button", () => {
      render(<Button isMenu>Menu Button</Button>);
      expect(screen.getByText(/Menu Button/i)).toBeInTheDocument();
    });

    describe("with `isOpen` as `true`", () => {
      it('should apply the `aria-expanded="true" attribute', () => {
        render(
          <Button isMenu isOpen>
            Menu
          </Button>
        );

        expect(screen.getByRole("button")).toHaveAttribute(
          "aria-expanded",
          "true"
        );
      });
    });

    describe("with `isOpen` as `false`", () => {
      it('should apply the `aria-expanded="false" attribute', () => {
        render(
          <Button isMenu isOpen={false}>
            Menu
          </Button>
        );

        expect(screen.getByRole("button")).toHaveAttribute(
          "aria-expanded",
          "false"
        );
      });
    });
  });

  describe("event handlers", () => {
    it("should invoke the `onClick` handler", () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Button</Button>);

      fireEvent.click(screen.getByText("Button"));

      expect(handleClick).toBeCalledTimes(1);
    });
  });

  // Ideally, these would be tested with a visual regression framework.
  // Until we implement that, using class names instead.
  describe("styles", () => {
    describe("isMenu", () => {
      describe("when `isOpen` is `false`", () => {
        it("should render the caret in its default position", () => {
          render(<Button isMenu>Menu</Button>);

          expect(screen.getByLabelText("Menu Icon")).not.toHaveClass(
            "tw-rotate-180"
          );
        });
      });

      describe("when `isOpen` is `true`", () => {
        it("should render the caret rotated 180 degrees", () => {
          render(
            <Button isMenu isOpen>
              Menu
            </Button>
          );

          expect(screen.getByLabelText("Menu Icon")).toHaveClass(
            "tw-rotate-180"
          );
        });
      });
    });
    describe("appearance", () => {
      describe("primary", () => {
        it("should render the appropriate class names", () => {
          render(<Button appearance="primary">Primary</Button>);

          expect(screen.getByRole("button")).toHaveClass(
            "tw-text-dark-bg tw-bg-blue-600 hover:tw-bg-blue-700 active:tw-bg-blue-800"
          );
        });

        describe("when disabled", () => {
          it("should render the disabled style", () => {
            render(
              <Button disabled appearance="primary">
                Primary
              </Button>
            );

            expect(screen.getByRole("button")).toHaveClass("tw-opacity-40");
          });
        });
      });
    });

    describe("size", () => {
      describe("sm", () => {
        it("should render `tw-h-6` and `tw-text-xs`", () => {
          render(<Button size="sm">Small</Button>);

          expect(screen.getByRole("button")).toHaveClass("tw-h-6 tw-text-xs");
        });

        describe("for icon only buttons", () => {
          it("should adjust the padding", () => {
            render(
              <Button
                aria-label="Small Icon Button"
                icon={<TestIcon />}
                size="sm"
              />
            );

            expect(screen.getByRole("button")).toHaveClass("tw-p-0.5");
          });
        });
      });

      describe("md", () => {
        it("should render `tw-h-8` and `tw-text-xs`", () => {
          render(<Button size="md">Medium</Button>);

          expect(screen.getByRole("button")).toHaveClass("tw-h-8 tw-text-xs");
        });

        describe("for icon only buttons", () => {
          it("should adjust the padding", () => {
            render(
              <Button
                aria-label="Medium Icon Button"
                icon={<TestIcon />}
                size="md"
              />
            );

            expect(screen.getByRole("button")).toHaveClass("tw-p-1.5");
          });
        });
      });

      describe("lg", () => {
        it("should render `tw-h-10` and `tw-text-sm`", () => {
          render(<Button size="lg">Large</Button>);

          expect(screen.getByRole("button")).toHaveClass("tw-h-10 tw-text-sm");
        });

        describe("for icon only buttons", () => {
          it("should adjust the padding", () => {
            render(
              <Button
                aria-label="Large Icon Button"
                icon={<TestIcon />}
                size="lg"
              />
            );

            expect(screen.getByRole("button")).toHaveClass("tw-p-2.5");
          });
        });
      });
    });

    describe("full width", () => {
      describe("true", () => {
        it("should render expected classes", () => {
          render(<Button fullWidth>Full Width</Button>);

          expect(screen.getByRole("button")).toHaveClass("tw-w-full tw-flex-1");
        });
      });

      describe("false", () => {
        it("should not render width full", () => {
          render(<Button>Full Width</Button>);

          expect(screen.getByRole("button")).not.toHaveClass("tw-w-full");
        });
      });
    });
  });
});
