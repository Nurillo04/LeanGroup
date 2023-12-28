import React from "react";
import "./Company.scss";
import { video } from "../../assets";

const Company = () => {
  return (
    <>
      <div className="company">
        <div className="container">
          <div className="company__wrapper">
            <h2 className="company__title">
              О компании <span className="company__span"> LEANGROUP</span>
            </h2>
            <div className="company__top">
              <div className="company__left">
                <img src={video} alt="video__rasm" />
              </div>
              <div className="company__right">
                <p className="company__text">
                  Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году
                  и на сегодняшний день является ведущей компанией по
                  производству ламинатных и экструзионных туб.
                </p>
                <p className="company__text">
                  Имея две технологии – для производства ламинатных и
                  экструзионных туб, мы предлагаем вам широкий спектр
                  возможностей. Большим преимуществом является собственный
                  печатный цех в ламинате и in-line печать в экструзии с
                  возможностью различных дополнительных опций декора. Особое
                  внимание уделяется работе с поставщиками для контроля и
                  поддержания качества производимой нами продукции.
                </p>
                <p className="company__text">
                  С января 2018 года компания стала членом Европейской
                  Ассоциации производителей туб (ETMA), что подтверждает сильную
                  позицию бренда и на рынке Европы.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
