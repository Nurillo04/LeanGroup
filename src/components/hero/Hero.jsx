import React from "react";
import "./Hero.scss";
// import { heroBg } from "../../assets";

const hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero__wrapper">
            <div className="hero__left">
              <h5 className="hero__title3">LEANGROUP - тубы и этикетки</h5>
              <h3 className="hero__title3">Ламинатные тубы</h3>
              <p className="hero__text">
                Используются для производства зубных паст. Широко применяются в
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
                химии и DIY (Do-it-Yourself).
              </p>
              <button className="hero__btn">Каталог</button>
            </div>
            <div className="hero__right"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default hero;
