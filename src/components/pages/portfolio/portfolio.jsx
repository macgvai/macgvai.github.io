import React from "react";
import { PortfolioStyled, PortfolioList, PortfolioTitle } from "./styles";
import PortfolioItem from "../../ui/portfolioItem/portfolioItem";

function Portfolio({ portfolioData }) {
  return (
    <PortfolioStyled as="main">
      <PortfolioTitle>Список моих работ</PortfolioTitle>
      <PortfolioList>
        {portfolioData.map((i) => PortfolioItem(i))}
      </PortfolioList>
    </PortfolioStyled>
  );
}

export default Portfolio;
