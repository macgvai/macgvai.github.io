import styled from "styled-components";
import Telegram from "../../../assets/telegram.svg";
import FB from "../../../assets/facebook.svg";
import Git from "../../../assets//github.svg";

export const SocialWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin: 0 auto;
`;

export const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  background: url(${Telegram}) center no-repeat;
`;

export const SocialLinkFB = styled(SocialLink)`
  background: url(${FB}) center no-repeat;
`;

export const SocialLinkGIT = styled(SocialLink)`
  background: url(${Git}) center no-repeat;
`;
