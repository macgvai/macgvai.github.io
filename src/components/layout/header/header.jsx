import React from "react";
import { StyledHeader, StyledHeaderWrap } from "./styles";
import Logo from "../../ui/logo/logo";
import MainNav from "../../ui/nav/nav";

function Header() {
  return (
    <StyledHeader>
      <StyledHeaderWrap as="div">
        <Logo />
        <MainNav />
      </StyledHeaderWrap>
    </StyledHeader>
  );
}

export default Header;
