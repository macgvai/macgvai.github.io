import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuItemBg from "../../../assets/MenuItemBg.png";
import MenuItemAbout from "../../../assets/MenuItemAbout.png";
import MenuItemPortfolio from "../../../assets/MenuItemPortfolio.png";
import { Ul, Li } from "../../styled/index";
import { NavAnimation } from "../animations/animations";

export const MenuItemList = styled(Ul)`
  display: flex;
`;

export const MenuItemItem = styled(Li)``;

export const MenuItemLink = styled(Link)`
  display: flex;
  justify-content: center;
  padding-top: 83px;
  position: relative;
  width: 108px;
  background: url(${MenuItemAbout}) center 10px no-repeat;
  &:before {
    background: url(${MenuItemBg});
    content: "";
    height: 70px;
    left: 18px;
    position: absolute;
    top: 6px;
    width: 74px;
    z-index: -1;
  }
  &:hover:before {
    animation: ${NavAnimation} 1s infinite linear;
  }
`;

export const MenuItemLinkPortfolio = styled(MenuItemLink)`
  background: url(${MenuItemPortfolio}) center 10px no-repeat;
`;

export const MenuItemText = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.theme.fontColorBlack};
  position: relative;
  text-align: center;
  text-transform: uppercase;
  &:after {
    background-color: #ffb84d;
    bottom: -6px;
    content: "";
    height: 3px;
    left: 50%;
    opacity: 0;
    position: absolute;
    transition: all 1s;
    width: 0;
  }
  ${MenuItemLink}:hover &:after {
    left: 0;
    opacity: 1;
    transition: all 1s;
    width: 100%;
  }
`;
