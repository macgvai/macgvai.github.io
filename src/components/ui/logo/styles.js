import styled from "styled-components";
import LogoBg from "../../../assets/logoBg.png";
import LogoBorder from "../../../assets/LogoBorder.png";

export const LogoLink = styled.a`
  text-decoration: none;
`;

export const LogoLinkWrap = styled.div`
  background: url(${LogoBg}) no-repeat;
  color: #000;
  display: flex;
  flex-direction: column;
  font-size: 31px;
  font-weight: 700;
  height: 90px;
  line-height: 29px;
  padding: 13px 30px;
  position: relative;
  width: 341px;
  &:before {
    background: url(${LogoBorder}) no-repeat;
    content: "";
    height: 85px;
    left: -5px;
    position: absolute;
    top: -4px;
    width: 329px;
    transition: transform 0.1s;
  }
  &:hover:before {
    transform: translate(4px, 4px);
    transition: transform 0.1s;
  }
`;

export const LogoSpan = styled.span`
  color: #fff;
  font-size: 24px;
  font-weight: 400;
`;
