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
          Я Frontend-разработчик, занимаюсь разработкой сайтов с 2020 года
        </AboutTextP>
        <AboutTextP>Профессиональные навыки:</AboutTextP>
        <AboutTextP>
          -- HTML 5, CSS 3 (Pixel-perfect, Адаптивная верстка (Flexbox, Grid),
          использование методологии БЭМ, препроцессоры - Sass / Scss / Less)
        </AboutTextP>
        <AboutTextP>
          -- JavaScript
          <AboutTextP>
            -- React JS (JSX, styled-components , react-router, react hooks)
          </AboutTextP>
        </AboutTextP>
        <AboutTextP>-- TypeScript</AboutTextP>
        <AboutTextP>
          -- Gulp, Webpack, NPM/Yarn, на уровне сборки проекта и понимания
          зависимостей
        </AboutTextP>
        <AboutTextP>-- Git</AboutTextP>
        <AboutTextP>
          -- Графические редакторы - Figma, Photoshop, Avocode
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
          в верстке, JavaScript (Angular, React, Sencha ExtJs).
        </AboutTextP>
        <AboutTextP>
          Имею два высших образования. Быстро обучаюсь, открыт новым знаниям.
          Рад быть полезным и мотивирован на развитие в качестве
          Frontend-разработчика.
        </AboutTextP>
      </AboutText>
      <AboutImgWrap>
        <AboutImg src={CertImg} alt="сертификат Htmlacademy" />
      </AboutImgWrap>
    </AboutStyled>
  );
}

export default About;
