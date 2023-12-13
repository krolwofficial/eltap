import React from "react";
import "@testing-library/jest-dom";
import { List, ListItem } from ".";
import { fireEvent, render, screen } from "@testing-library/react";

describe("List", () => {
  describe("simple", () => {
    it("should render the list items", () => {
      render(
        <List>
          <ListItem>One</ListItem>
          <ListItem>Two</ListItem>
          <ListItem>Three</ListItem>
        </List>
      );

      expect(screen.getByText("One")).toBeInTheDocument();
      expect(screen.getByText("Two")).toBeInTheDocument();
      expect(screen.getByText("Three")).toBeInTheDocument();
    });
  });

  describe("when clicking on list item", () => {
    it("should call onClick", () => {
      const onClickSpy = jest.fn();
      render(
        <List>
          <ListItem onClick={onClickSpy}>One</ListItem>
        </List>
      );

      fireEvent.click(screen.getByRole("listitem"));

      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe("with icons", () => {});
});
