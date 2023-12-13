import React, { ReactElement } from "react";
import { UserIcon } from "../Icon";
import { List, ListItem } from "./";

export default {
  title: "Display/List",
  component: List,
  subcomponents: { ListItem },
};

export function Default(): ReactElement {
  /**
   * You can add custom styling to the List and ListItem with the "style" and "listItemStyle" props.
   */
  return (
    <List style={{ width: "8rem" }}>
      <ListItem>One</ListItem>
      <ListItem active>Two Two Two Two Two Two Two</ListItem>
      <ListItem disabled>Three</ListItem>
    </List>
  );
}

export function IconLeft(): ReactElement {
  /**
   * You can add custom styling to the List and ListItem with the "style" and "listItemStyle" props.
   */
  return (
    <List style={{ width: "8rem" }}>
      <ListItem iconLeft={<UserIcon size="md" />}>One</ListItem>
      <ListItem iconLeft={<UserIcon size="md" />} active>
        Two Two Two Two Two Two Two
      </ListItem>
      <ListItem iconLeft={<UserIcon size="md" />} disabled>
        Three
      </ListItem>
    </List>
  );
}
