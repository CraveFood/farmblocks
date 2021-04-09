import React from "react";
import styled from "styled-components";
import { space, layout } from "styled-system";

import formInput from "./index";

export const FbInput = formInput((props) =>
  React.createElement("input", props),
);

export const Container = styled.div.attrs((props) => ({
  width: props.width || [1, 1, 1, 1 / 3],
}))`
  ${layout};
  ${space};
`;

// eslint-disable-next-line
export const WithValue = ({ children }) => {
  const [value, setValue] = React.useState();
  return (
    <div>
      <input
        type="button"
        onClick={() => {
          setValue(Math.random().toString(36).substr(2, 9));
        }}
        value="Click me to change input value"
      />

      {children(value)}
    </div>
  );
};

// eslint-disable-next-line
export const FocusContainer = ({ children }) => {
  const [focused, setFocused] = React.useState();
  return (
    <div>
      <input
        type="button"
        onClick={() => {
          setFocused((value) => !value);
        }}
        value="Click me to toggle focused style"
      />

      {children(focused)}
    </div>
  );
};
