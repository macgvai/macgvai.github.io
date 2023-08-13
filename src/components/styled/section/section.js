import styled from "styled-components";
import { PageAppearance } from "../../ui/animations/animations";

const Section = styled.section`
  position: relative;
  display: flex;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  animation: ${PageAppearance} 1s forwards;
  @media (min-width: ${(props) => props.theme.isDesktop}) {
    padding-left: ${(props) => props.theme.pagePadding};
    padding-right: ${(props) => props.theme.pagePadding};
    width: ${(props) => props.theme.isDesktop};
    margin: 0 auto;
  }
`;

export default Section;
