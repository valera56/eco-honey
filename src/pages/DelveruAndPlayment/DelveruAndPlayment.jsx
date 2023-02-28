import React from 'react'
import ImgFirst from "./img/Frame 25.svg";
import ImgSecond from "./img/Frame 26.svg";
import ImgThird from "./img/Frame 27.svg";
import "./css/style.css";
import "./css/media.css";

function DelveruAndPlayment() {
  return (
    <div className="container">
      <h1 className="name">
        Мы предлагаем быстрые и надежные варианты доставки:
      </h1>
      <div className="contents row">
        <div className="card col w-18r">
          <div>
            <img src={ImgFirst} />
          </div>
          <h2>Самовывоз</h2>
          <br />
          <p className="card-text">
            выберите «Самовывоз» при оформлении заказа, мы его подготовим и вы
            сможете забрать заказ по адресу: Кыргызстан, Джалал-Абадская обл.,
            г.Кара-Куль, ул.Торокулова, участок 38.
          </p>
        </div>
        <div className="card col w-18r kotok">
          <div className="content_second">
            <h2>Через службы доставки</h2>
            <br />
            <p className="card-text">
              Аманат роуд, Ылдам экспресс. Доставка от 200 сом и более. Так же
              при оформлении заказа выберете “через службу доставки”, мы
              подготовим ваш заказ и отправим через курьера. Если вы оплачиваете
              за заказ наличными, денежные средства нужно будет отдать курьеру.
              И оплатить стоимость доставки.
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
          <h2>Способы оплаты:</h2>
          <br />
          <p className="card-text">
            Наличными: курьеру – при доставке, продавцу – при самовывозе;
            <br />
            Через банковские карты Visa/Элкарт.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DelveruAndPlayment