import React, { useState } from "react";
import {
    AboutStyled,
    AboutText,
    AboutImg,
    AboutImgWrap,
    AboutTextTitle,
    AboutTextP,
} from "./styles";
import CertImg from "../../../assets/certHtmlacademy.png";
import AngularCert from "../../../assets/angularSert.jpg";
import NestCert from "../../../assets/nestjs.jpg";
import SqlCert from "../../../assets/sql.png";
import ReactDOM from "react-dom"; // Добавьте это

function About() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage(null);
    };

    // Портал: рендерим модалку в #modal вне основного контейнера
    const modalRoot = document.getElementById("modal");

    const Modal = () =>
        modalRoot
            ? ReactDOM.createPortal(
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000,
                        padding: "20px",
                    }}
                    onClick={closeModal}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img
                            src={selectedImage}
                            alt="Увеличенный сертификат"
                            style={{
                                maxWidth: "90vw",
                                maxHeight: "90vh",
                                objectFit: "contain",
                                borderRadius: "8px",
                                boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
                            }}
                        />
                        <button
                            onClick={closeModal}
                            style={{
                                position: "absolute",
                                top: "-40px",
                                right: "10px",
                                background: "#fff",
                                border: "none",
                                fontSize: "32px",
                                fontWeight: "normal",
                                cursor: "pointer",
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                                lineHeight: "40px",
                                textAlign: "center",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                                zIndex: 1001,
                            }}
                        >
                            ×
                        </button>
                    </div>
                </div>,
                modalRoot
            )
            : null;

    return (
        <AboutStyled as="main">
            <AboutText>
                <AboutTextTitle>Привет! Меня зовут Виктор.</AboutTextTitle>
                <AboutTextP>
                    Я Frontend-разработчик, занимаюсь веб-разработкой с 2020 года
                </AboutTextP>
                <AboutTextP>Профессиональные навыки:</AboutTextP>
                <AboutTextP>
                    -- HTML 5, CSS 3 (Pixel-perfect, Адаптивная верстка (Flexbox, Grid),
                    использование методологии БЭМ, препроцессоры - Sass / Scss / Less)
                </AboutTextP>
                <AboutTextP>
                    -- JavaScript
                    <AboutTextP>-- Sencha ExtJs</AboutTextP>
                    <AboutTextP>-- Angular</AboutTextP>
                    <AboutTextP>-- React JS (JSX, styled-components, react-router, react hooks)</AboutTextP>
                </AboutTextP>
                <AboutTextP>-- TypeScript</AboutTextP>
                <AboutTextP>
                    -- Gulp, Webpack, NPM/Yarn, на уровне сборки проекта и понимания зависимостей
                </AboutTextP>
                <AboutTextP>-- Git</AboutTextP>
                <AboutTextP>-- Графические редакторы - Figma, Photoshop, Avocode</AboutTextP>
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
                <AboutImg
                    src={NestCert}
                    alt="сертификат NestJs"
                    onClick={() => handleImageClick(NestCert)}
                    style={{ cursor: "pointer" }}
                />
                <AboutImg
                    src={AngularCert}
                    alt="сертификат Angular"
                    onClick={() => handleImageClick(AngularCert)}
                    style={{ cursor: "pointer" }}
                />
                <AboutImg
                    src={CertImg}
                    alt="сертификат Htmlacademy"
                    onClick={() => handleImageClick(CertImg)}
                    style={{ cursor: "pointer" }}
                />
                <AboutImg
                    src={SqlCert}
                    alt="сертификат sql"
                    onClick={() => handleImageClick(SqlCert)}
                    style={{ cursor: "pointer" }}
                />
            </AboutImgWrap>

            {/* Модальное окно рендерится через портал — вне компонента */}
            {modalOpen && selectedImage && <Modal />}
        </AboutStyled>
    );
}

export default About;