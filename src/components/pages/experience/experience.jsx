import React from "react";
import { ExperienceStyled } from "./styles";
import {logDOM} from "@testing-library/react";
import logo from "../../ui/logo/logo";

function Experience() {
  async function submitForm(event) {
    event.preventDefault(); // отключаем перезагрузку/перенаправление страницы
    const formData = new FormData(event.target); // Создаем FormData из формы

    // Отправляем данные на сервер с помощью fetch
    fetch('http://localhost:3000/api/portfolio', {
      method: 'POST',
      body: formData
    })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          event.target.reset(); // Сбрасываем форму после успешной отправки
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  }

  return (
      <ExperienceStyled>
        <form
            encType="multipart/form-data"
            method="post"
            id="form"
            onSubmit={submitForm}
            // action="SendPHPMailer.php"
        >
          <p>Имя</p>
          <input placeholder="Представьтесь" name="name" type="text"></input>
          <p>Email</p>
          <input placeholder="Укажите почту" name="email" type="text"></input>
          <p>Сообщение</p>
          <textarea name="text"></textarea>
          <p>Прикрепить файлы</p>
          <input type="file" name="myfile" multiple id="myfile"></input>
          <p>
            <button type="submit">Отправить</button>
          </p>
        </form>
      </ExperienceStyled>
  );
}

export default Experience;
