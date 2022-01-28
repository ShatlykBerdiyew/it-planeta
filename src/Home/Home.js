import React from "react";
import { HomeStyled } from "./Home.styles";

const Home = () => {
  return (
    <HomeStyled>
      <div className="buttons">
        <button>Регистрация</button>
        <button>Войти</button>
      </div>
      <input placeholder="E-mail" type="mail" className="mail" />
      <input placeholder="Пароль" type="password" className="password" />
      <input
        placeholder="Повторите пароль"
        type="password"
        className="passwordConfirm"
      />
      <button className="submit">Регистрация</button>
      <div style={{ display: "flex" }}>
        <input type="checkbox" name="confirmEmail" id="confirm" />
        <p id="confirmEmail">
          Соглашаюсь на получение рассылки по электронной почте
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <input type="checkbox" name="confirm" id="confirm" />
        <p id="confirm">
          Соглашаюсь с <a href="">политикой обработки персональных данных</a>
        </p>
      </div>
    </HomeStyled>
  );
};

export default Home;
