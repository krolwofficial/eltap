import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "../../utils/testRenderer";
import { Tooltip } from "../Tooltip";
import {
  DangerIcon,
  InfoIcon,
  LoadingIcon,
  MenuIcon,
  ProgressRing,
  SuccessIcon,
  WarningIcon,
} from "./SemanticIcons";

describe("Semantic Icons", () => {
  describe("LoadingIcon", () => {
    it('should render an icon with "Loading" label', () => {
      render(<LoadingIcon />);

      expect(screen.getByLabelText("Loading")).toBeInTheDocument();
    });

    describe("with tooltip", () => {
      it("should show the tooltip on hover", async () => {
        const label = "label";
        render(
          <Tooltip label={label}>
            <LoadingIcon />
          </Tooltip>
        );

        const icon = screen.getByLabelText("Loading");
        userEvent.hover(icon);

        await waitFor(() =>
          expect(screen.getByText(label)).toBeInTheDocument()
        );

        userEvent.unhover(icon);
        await waitFor(() => {
          expect(screen.queryByText(label)).not.toBeInTheDocument();
        });
      });
    });
  });

  describe("DangerIcon", () => {
    it('should render an icon with "Danger" label', () => {
      render(<DangerIcon />);
      expect(screen.getByLabelText("Danger")).toBeInTheDocument();
    });

    describe("with tooltip", () => {
      it("should show the tooltip on hover", async () => {
        const label = "label";
        render(
          <Tooltip label={label}>
            <DangerIcon />
          </Tooltip>
        );

        const icon = screen.getByLabelText("Danger");
        userEvent.hover(icon);

        await waitFor(() =>
          expect(screen.getByText(label)).toBeInTheDocument()
        );

        userEvent.unhover(icon);
        await waitFor(() => {
          expect(screen.queryByText(label)).not.toBeInTheDocument();
        });
      });
    });
  });

  describe("InfoIcon", () => {
    it('should render an icon with "More info" label', () => {
      render(<InfoIcon />);
      expect(screen.getByLabelText("More info")).toBeInTheDocument();
    });

    describe("with tooltip", () => {
      it("should show the tooltip on hover", async () => {
        const label = "label";
        render(
          <Tooltip label={label}>
            <InfoIcon />
          </Tooltip>
        );

        const icon = screen.getByLabelText("More info");
        userEvent.hover(icon);

        await waitFor(() =>
          expect(screen.getByText(label)).toBeInTheDocument()
        );

        userEvent.unhover(icon);
        await waitFor(() => {
          expect(screen.queryByText(label)).not.toBeInTheDocument();
        });
      });
    });
  });

  describe("SuccessIcon", () => {
    it('should render an icon with "Success" label', () => {
      render(<SuccessIcon />);
      expect(screen.getByLabelText("Success")).toBeInTheDocument();
    });

    describe("with tooltip", () => {
      it("should show the tooltip on hover", async () => {
        const label = "label";
        render(
          <Tooltip label={label}>
            <SuccessIcon />
          </Tooltip>
        );

        const icon = screen.getByLabelText("Success");
        userEvent.hover(icon);

        await waitFor(() =>
          expect(screen.getByText(label)).toBeInTheDocument()
        );

        userEvent.unhover(icon);
        await waitFor(() => {
          expect(screen.queryByText(label)).not.toBeInTheDocument();
        });
      });
    });
  });

  describe("WarningIcon", () => {
    it('should render an icon with "Warning" label', () => {
      render(<WarningIcon />);

      expect(screen.getByLabelText("Warning")).toBeInTheDocument();
    });

    describe("with tooltip", () => {
      it("should show the tooltip on hover", async () => {
        const label = "label";
        render(
          <Tooltip label={label}>
            <WarningIcon />
          </Tooltip>
        );

        const icon = screen.getByLabelText("Warning");
        userEvent.hover(icon);

        await waitFor(() =>
          expect(screen.getByText(label)).toBeInTheDocument()
        );

        userEvent.unhover(icon);
        await waitFor(() => {
          expect(screen.queryByText(label)).not.toBeInTheDocument();
        });
      });
    });
  });

  // describe("InfoTooltipIcon", () => {
  //   it("should render the tooltip on hover", async () => {
  //     const label = "label";
  //     render(
  //       <Tooltip label={label}>
  //         <InfoTooltipIcon aria-label={label} />
  //       </Tooltip>
  //     );

  //     const icon = screen.getByRole("img", { name: label });
  //     userEvent.hover(icon);

  //     const toltip = await screen.findByText(label);

  //     userEvent.unhover(icon);
  //     await waitForElementToBeRemoved(toltip);
  //   });
  // });

  describe("MenuIcon", () => {
    // it("should render a hidden icon", () => {
    //   render(<MenuIcon />);

    //   expect(screen.getByRole("img", { hidden: true })).toBeInTheDocument();
    // });

    describe("when `isOpen` is `true`", () => {
      it("should rotate the icon", () => {
        render(<MenuIcon isOpen />);

        // expect(screen.getByRole("img", { hidden: true })).toHaveClass(
        //   "tw-rotate-180"
        // );
        expect(screen.getByLabelText("Menu Icon")).toHaveClass("tw-rotate-180");
      });
    });
  });

  // describe("LoadingIconFull", () => {
  //   it("should render a loading icon", () => {
  //     render(<LoadingIconFull />);

  //     expect(screen.getByLabelText("Loading")).toBeInTheDocument();
  //   });

  //   it("should rotate the icon", () => {
  //     render(<LoadingIconFull />);

  //     expect(screen.getByRole("img", { hidden: true })).toHaveClass(
  //       "tw-animate-spin"
  //     );
  //   });
  // });

  describe("ProgressRing", () => {
    it("should render an svg circle", () => {
      render(<ProgressRing radius={2} stroke={2} progress={70} />);

      expect(screen.getByLabelText("Progress")).toBeInTheDocument();
    });
  });
});
