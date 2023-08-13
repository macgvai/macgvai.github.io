import styled from "styled-components";

export const PortfolioItemLi = styled.li`
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const PortfolioLink = styled.a`
  color: ${(props) => props.theme.fontColorBlack};
`;

export const Title = styled.span`
  display: block;
`;
