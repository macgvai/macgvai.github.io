import styled from "styled-components";
import { Section } from "./../../styled/index";

export const StyledHeader = styled.header`
  // background-color: ${(props) => props.theme.backgroundColorMain};
`;

export const StyledHeaderWrap = styled(Section)`
  padding-top: 30px;
  padding-bottom: 30px;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;
