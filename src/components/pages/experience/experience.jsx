import React from "react";
import { ExperienceStyled } from "./styles";

function Experience() {
  console.log(document.querySelector("form"));

  async function submitForm(event) {
    event.preventDefault(); // отключаем перезагрузку/перенаправление страницы
    debugger;
    try {
      // Формируем запрос
      const response = await fetch(event.target.action, {
        method: "POST",
        body: new FormData(event.target),
      });
      // проверяем, что ответ есть
      if (!response.ok)
        throw `Ошибка при обращении к серверу: ${response.status}`;
      // проверяем, что ответ действительно JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        console.log("contentType", contentType);
        console.log("contentType");
        throw "Ошибка обработки. Ответ не JSON";
      }
      // обрабатываем запрос
      const json = await response.json();
      if (json.result === "success") {
        // в случае успеха
        alert(json.info);
      } else {
        // в случае ошибки
        console.log(json);
        throw json.info;
      }
    } catch (error) {
      // обработка ошибки
      alert(error);
    }
  }

  return (
    <ExperienceStyled>
      <form
        enctype="multipart/form-data"
        method="post"
        id="form"
        onSubmit={submitForm}
        action="SendPHPMailer.php"
      >
        <p>Имя</p>
        <input placeholder="Представьтесь" name="name" type="text"></input>
        <p>Email</p>
        <input placeholder="Укажите почту" name="email" type="text"></input>
        <p>Сообщение</p>
        <textarea name="text"></textarea>
        <p>Прикрепить файлы</p>
        <input type="file" name="myfile[]" multiple id="myfile"></input>
        <p>
          <button type="submit">Отправить</button>
        </p>
      </form>
    </ExperienceStyled>
  );
}

export default Experience;
