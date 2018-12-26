import React from "react";
import { storiesOf } from "@storybook/react";

import DropdownItemWrapper from "../styledComponents/DropdownItemWrapper";
import DropdownMenuWrapper from "../styledComponents/DropdownMenuWrapper";

storiesOf("Dropdown/Styled components/Menu and item", module)
  .add("Default", () => (
    <DropdownMenuWrapper>
      <ul>
        <DropdownItemWrapper>
          <div>Option 1</div>
        </DropdownItemWrapper>

        <DropdownItemWrapper>
          <div>Option 2</div>
        </DropdownItemWrapper>
      </ul>
    </DropdownMenuWrapper>
  ))
  .add("Selected", () => (
    <DropdownMenuWrapper>
      <ul>
        <DropdownItemWrapper>
          <div>Option 1</div>
        </DropdownItemWrapper>

        <DropdownItemWrapper selected>
          <div>Option 2</div>
        </DropdownItemWrapper>
      </ul>
    </DropdownMenuWrapper>
  ))
  .add("Highlighted", () => (
    <DropdownMenuWrapper>
      <ul>
        <DropdownItemWrapper>
          <div>Option 1</div>
        </DropdownItemWrapper>

        <DropdownItemWrapper highlighted>
          <div>Option 2</div>
        </DropdownItemWrapper>
      </ul>
    </DropdownMenuWrapper>
  ))
  .add("Footer", () => (
    <DropdownMenuWrapper>
      <ul>
        <DropdownItemWrapper>
          <div>Option 1</div>
        </DropdownItemWrapper>

        <DropdownItemWrapper footer>
          <div>Footer</div>
        </DropdownItemWrapper>
      </ul>
    </DropdownMenuWrapper>
  ));
