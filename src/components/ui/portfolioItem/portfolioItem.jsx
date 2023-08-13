import React from "react";
import { PortfolioItemLi, PortfolioLink } from "./styles";

const PortfolioItem = ({ link, title, id, image = "drink2goPrev.png" }) => {
  console.log({ image });
  // let portfolioImg = { image };
  // console.log(portfolioImg);
  return (
    <PortfolioItemLi key={id}>
      <PortfolioLink href={link} target="_blank" rel="noreferrer">
        {title}
        <img src={require(`../../../assets/${image}`)} alt={title} />
      </PortfolioLink>
    </PortfolioItemLi>
  );
};

export default PortfolioItem;
