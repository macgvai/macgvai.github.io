import { keyframes } from "styled-components";

export const PageAppearance = keyframes`
0% {
  opacity: 0;
  transform: translateY(-20px);
}
100% {
  opacity: 1;
  transform: translateY(0);
`;

export const NavAnimation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;
