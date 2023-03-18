import React from "react";
import {
  PortfolioStyled,
  PortfolioLink,
  PortfolioList,
  PortfolioTitle,
  PortfolioItem,
} from "./styles";

function Portfolio() {
  return (
    <PortfolioStyled as="main">
      <PortfolioTitle>Список моих работ</PortfolioTitle>
      <PortfolioList>
        <PortfolioItem>
          <PortfolioLink
            href="https://st-viktor.ru/Drink2Go/build/"
            target="_blank"
            rel="noreferrer"
          >
            Интернет-магазин кофейных напитков
          </PortfolioLink>
        </PortfolioItem>
        <PortfolioItem>
          <PortfolioLink
            href="http://st-viktor.ru/Farm-Products-REACT/"
            target="_blank"
            rel="noreferrer"
          >
            Интернет-магазин Фермерские продукты. React
          </PortfolioLink>
        </PortfolioItem>
        <PortfolioItem>
          <PortfolioLink
            href="http://st-viktor.ru/tehnomart/"
            target="_blank"
            rel="noreferrer"
          >
            Интернет-магазин строительных материалов и инструментов для ремонта
          </PortfolioLink>
        </PortfolioItem>
        <PortfolioItem>
          <PortfolioLink
            href="http://st-viktor.ru/cat-energy/build/"
            target="_blank"
            rel="noreferrer"
          >
            cat-energy
          </PortfolioLink>
        </PortfolioItem>
        <PortfolioItem>
          <PortfolioLink
            href="http://st-viktor.ru/sedona/build/"
            target="_blank"
            rel="noreferrer"
          >
            SEDONA
          </PortfolioLink>
        </PortfolioItem>
        <PortfolioItem>
          <PortfolioLink
            href="http://st-viktor.ru/keksobooking/build/"
            target="_blank"
            rel="noreferrer"
          >
            keksobooking
          </PortfolioLink>
        </PortfolioItem>
        <PortfolioItem>
          <PortfolioLink
            href="http://st-viktor.ru/uber777/"
            target="_blank"
            rel="noreferrer"
          >
            UBER777
          </PortfolioLink>
        </PortfolioItem>
        <PortfolioItem>
          <PortfolioLink
            href="http://st-viktor.ru/tour/"
            target="_blank"
            rel="noreferrer"
          >
            турагентство
          </PortfolioLink>
        </PortfolioItem>
      </PortfolioList>
    </PortfolioStyled>
  );
}

export default Portfolio;
