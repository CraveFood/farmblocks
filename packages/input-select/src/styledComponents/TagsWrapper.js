import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;

  & > div {
    margin: 8px 0 0 8px;
  }
  & > div + input {
    flex: 1;
    min-width: 80px !important;
  }
`;
