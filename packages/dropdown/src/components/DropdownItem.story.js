import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import DropdownItemWrapper from "../styledComponents/DropdownItemWrapper";
import DropdownMenuWrapper from "../styledComponents/DropdownMenuWrapper";

storiesOf("Dropdown/Styled components/Menu and item", module)
  .add(
    "Default",
    withInfo()(() => (
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
  )
  .add(
    "Selected",
    withInfo()(() => (
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
  )
  .add(
    "Highlighted",
    withInfo()(() => (
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
  );
