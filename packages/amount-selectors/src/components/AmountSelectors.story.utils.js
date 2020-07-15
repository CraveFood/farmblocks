import styled from "styled-components";
import { space, layout } from "styled-system"; // eslint-disable-line

// eslint-disable-next-line
export const Container = styled.div.attrs(props => ({
  width: props.width || "200px",
}))`
  ${layout};
  ${space};
`;
