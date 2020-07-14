import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;

  & > div {
    margin: 8px 0px 8px 8px;
  }
  & > div + input {
    flex: 1;
    min-width: 80px !important;
  }

  .wrapped {
    border: none;
    margin: 8px 16px;
    cursor: pointer;
  }
`;
