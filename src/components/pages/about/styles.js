import styled from "styled-components";
import { Section } from "./../../styled/index";

export const AboutStyled = styled(Section)`
  padding-top: 20px;
  padding-bottom: 250px;
  justify-content: space-between;
  display: block;
  @media (min-width: ${(props) => props.theme.isTablet}) {
    display: flex;
  }
`;

export const AboutText = styled.div`
  font-size: 22px;
  font-weight: 400;
  @media (min-width: ${(props) => props.theme.isTablet}) {
    width: 50%;
  }
`;

export const AboutTextTitle = styled.h1`
  text-align: center;
  font-size: 22px;
  font-weight: 700;
`;

export const AboutTextP = styled.p`
  text-indent: 20px;
  font-size: 22px;
`;

export const AboutImgWrap = styled.div`
  @media (min-width: ${(props) => props.theme.isTablet}) {
    width: 40%;
  }
`;
export const AboutImg = styled.img`
  @media (min-width: ${(props) => props.theme.isTablet}) {
    width: 400px;
  }
`;
