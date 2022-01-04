import React from "react";
import styled from "styled-components";

import Label from ".";

export default {
  title: "Form/Label",
};

const Container = styled.div`
  margin-bottom: 24px;
`;

export const Labels = () => (
  <div>
    <Container>
      <Label htmlFor="default">Default Label</Label>
      <input id="default" />
    </Container>

    <Container>
      <Label htmlFor="focused" focused>
        Focused Label
      </Label>
      <input id="focused" />
    </Container>
    <Container>
      <Label htmlFor="invalid" invalid>
        Invalid Label
      </Label>
      <input id="invalid" />
    </Container>
    <Container>
      <Label htmlFor="disabled" disabled>
        Disabled Label
      </Label>
      <input id="disabled" />
    </Container>
    <Container>
      <Label htmlFor="protected" protected>
        Protected Label
      </Label>
      <input id="protected" />
    </Container>
    <Container>
      <Label htmlFor="protected-disabled" protected disabled>
        Protected Disabled Label
      </Label>
      <input id="protected-disabled" />
    </Container>

    <Container>
      <Label
        htmlFor="extended"
        css="
          border: dotted 4px sienna;
          color: chocolate;
          text-decoration: underline;
        "
      >
        Extended style
      </Label>
      <input id="extended" />
    </Container>
  </div>
);
