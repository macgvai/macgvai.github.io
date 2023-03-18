import React from "react";
import { LogoLink, LogoLinkWrap, LogoSpan } from "./styles";

function Logo() {
  return (
    <LogoLink href="#">
      <LogoLinkWrap>
        Виктор Ступицын
        <LogoSpan>Front-end developer</LogoSpan>
      </LogoLinkWrap>
    </LogoLink>
  );
}

export default Logo;
