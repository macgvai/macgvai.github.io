import React from "react";
import { SocialWrap, SocialLink, SocialLinkFB, SocialLinkGIT } from "./styles";

function Social() {
  return (
    <SocialWrap>
      <SocialLinkFB
        href="https://www.facebook.com/StupitsynViktor/"
        target="_blank"
        rel="noreferrer"
      ></SocialLinkFB>
      <SocialLinkGIT
        href="https://github.com/macgvai"
        target="_blank"
        rel="noreferrer"
      ></SocialLinkGIT>
      <SocialLink
        href="http://t.me/zzMacGvaIzz"
        target="_blank"
        rel="noreferrer"
      ></SocialLink>
    </SocialWrap>
  );
}

export default Social;
