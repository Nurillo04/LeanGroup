import React from "react";
import "./Certificate.scss";

import { image1 } from "../../assets";
import { image2 } from "../../assets";
import { image3 } from "../../assets";
import { image4 } from "../../assets";
import { image5 } from "../../assets";

const Certificate = () => {
  return (
    <>
      <div className="certificate">
        <div className="container">
          <div className="certificate__wrapper">
            <h3 className="certificate__title">
              Качество продукции подтверждают
              <span className="certificate__span">сертификаты</span>
            </h3>
            <div className="certificate__top">
              <img src={image1} alt="Image" />
              <img src={image2} alt="Image" />
              <img src={image3} alt="Image" />
              <img src={image4} alt="Image" />
              <img src={image5} alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
