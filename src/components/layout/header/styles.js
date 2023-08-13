import styled from "styled-components";
import { Section } from "./../../styled/index";

export const StyledHeader = styled.header`
  // background-color: ${(props) => props.theme.backgroundColorMain};
`;

export const StyledHeaderWrap = styled(Section)`
  padding-top: 30px;
  flex-direction: column;
  padding-bottom: 30px;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  padding-left: 20px;
  padding-right: 20px;
  @media (min-width: ${(props) => props.theme.isTablet}) {
    flex-direction: row;
  }
`;
