import styled from "styled-components";
import { Section } from "./../../styled/index";

export const PortfolioStyled = styled(Section)`
  padding-bottom: 327px;
  display: block;
`;

export const PortfolioTitle = styled.h1`
  text-align: center;
`;

export const PortfolioList = styled.ol`
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const PortfolioItem = styled.li`
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const PortfolioLink = styled.a`
  color: ${(props) => props.theme.fontColorBlack};
`;
