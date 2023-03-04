import React from 'react'
import ImgFirst from "./img/Frame 25.svg";
import ImgSecond from "./img/Frame 26.svg";
import ImgThird from "./img/Frame 27.svg";
import "./css/style.css";
import "./css/media.css";
import { useTranslation } from 'react-i18next';

function DelveruAndPlayment() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <h1 className="name">
        {t("We offer fast and reliable delivery options:")}
      </h1>
      <div className="contents row">
        <div className="card col w-18r">
          <div>
            <img src={ImgFirst} />
          </div>
          <h2> {t("pickup;")} </h2>
          <br />
          <p className="card-text">
            {t("select Pickup when placing an order, we will prepare it and you you can pick up the order at the address: Kyrgyzstan, Jalal-Abad region,  Kara-Kul city, Torokulova street, section 38.")}
          </p>
        </div>
        <div className="card col w-18r kotok">
          <div className="content_second">
            <h2> {t("Through delivery services")} </h2>
            <br />
            <p className="card-text">
              {t("Amanat Road, Yldam Express. Delivery from 200 soms and more. Also when placing an order, select via delivery service , we  We will prepare your order and send it via courier. If you pay for an order in cash, the money will need to be given to the courier. And pay the shipping cost.")}
            </p>
          </div>
          <div className="img_second">
            <img src={ImgSecond} />
          </div>
        </div>
        <div className="card col w-18r">
          <div>
            <img src={ImgThird} />
          </div>
          <h2> {t("Payment Methods:")} </h2>
          <br />
          <p className="card-text">
            {t(" Cash: to the courier - upon delivery, to the seller - upon")}
            <br />
           {t(" Via Visa/Elcart bank cards.")}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DelveruAndPlayment