import React from "react";
import {
  AboutStyled,
  AboutText,
  AboutImg,
  AboutImgWrap,
  AboutTextTitle,
  AboutTextP,
} from "./styles";
import CertImg from "../../../assets/certHtmlacademy.png";

function About() {
  return (
    <AboutStyled as="main">
      <AboutText>
        <AboutTextTitle>Привет! Меня зовут Виктор.</AboutTextTitle>
        <AboutTextP>
          Я начинающий Frontend-разработчик, Frontend начал изучать в 2020 году
          по видеокурсам и тренажерам.
        </AboutTextP>
        <AboutTextP>
          С января 2022 по февраль 2023 проходил курс «Профессия
          Frontend-разработчик» от{" "}
          <a
            href="https://htmlacademy.ru/profession/frontender"
            target="_blank"
            rel="noreferrer"
          >
            htmlacademy
          </a>{" "}
          и успешно прошел грейдирование.
        </AboutTextP>
        <AboutTextP>
          В данный момент изучаю Typescript и продолжаю совершенствовать навыки
          в верстке, JavaScript и React. Имею два высших образования. В
          последние годы работал в другой сфере. В Frontend-разработке есть опыт
          только с личными и учебными проектами.
        </AboutTextP>
      </AboutText>
      <AboutImgWrap>
        <AboutImg src={CertImg} alt="сертификат Htmlacademy" />
      </AboutImgWrap>
    </AboutStyled>
  );
}

export default About;
