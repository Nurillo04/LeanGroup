import React from "react";
import { logo } from "../../assets";

import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <img src={logo} alt="rasm" />
            </div>
            <div className="header__right">
              <div className="header__right-nav">
                <nav>
                  <ul className="header__list">
                    <div className="header__item">Продукция</div>
                    <div className="header__item">Сертификаты</div>
                    <div className="header__item">Наша команда</div>
                    <div className="header__item">О нас</div>
                    <div className="header__item">Новости</div>
                    <div className="header__item">Вакансии</div>
                    <div className="header__item">Контакты</div>
                  </ul>
                </nav>
              </div>
              <div className="header__right-btn">
                <button className="header__btn btn1">RU</button>
                <button className="header__btn btn2">EN</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
