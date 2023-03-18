import React from "react";
import { StyledFooter, StyledFooterWrap } from "./styles";
import Social from "../../ui/social/social";

function Footer() {
  return (
    <StyledFooter>
      <StyledFooterWrap as="div">
        <Social />
      </StyledFooterWrap>
    </StyledFooter>
  );
}

export default Footer;
