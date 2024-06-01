import React from "react";
import {
  MenuItemLink,
  MenuItemLinkPortfolio,
  MenuItemLinkExperience,
  MenuItemText,
  MenuItemList,
  MenuItemItem,
} from "./styles";

function MainNav() {
  return (
    <MenuItemList>
      <MenuItemItem>
        <MenuItemLink to="/">
          <MenuItemText>Обо мне</MenuItemText>
        </MenuItemLink>
      </MenuItemItem>
      <MenuItemItem>
        <MenuItemLinkPortfolio to="/portfolio">
          <MenuItemText>Портфолио</MenuItemText>
        </MenuItemLinkPortfolio>
      </MenuItemItem>
      {/* <MenuItemItem>
        <MenuItemLinkExperience to="/experience">
          <MenuItemText>Опыт работы</MenuItemText>
        </MenuItemLinkExperience>
      </MenuItemItem> */}
    </MenuItemList>
  );
}

export default MainNav;
