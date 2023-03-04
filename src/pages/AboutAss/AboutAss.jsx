import React from 'react'
import { useTranslation } from 'react-i18next'
import './css/main.css'
import './css/media.css'
import ImgFirst from './img/Frame 24.svg'
import ImgSecond from './img/Frame 25.svg'
import ImgThird from './img/Frame 27.svg'

function AboutAss() {
  const { t } = useTranslation();
  return (
   <div>
    <h1 className="name"> {t("What is the uniqueness of Eco honey?")} </h1>
      <div className="contents row">
        <div className="card col w-18r">
          <p className="card-text">
            {t("Environmental friendliness: we keep an apiary exclusively on the high-mountain jailoo Gudu and Chon-Dөbo, Jalal-Ab, hellish region.")}
          </p>
          <div>
            <img src={ImgFirst} />
          </div>
        </div>
        <div className="card col w-18r">
        <div className="img_second">
            <img src={ImgSecond} />
          </div>
          <p className="card-text content_second"> {t("0% impurities: we do not add sugar and other impurities to honey.")}
          </p>
        </div>
        <div className="card col w-18r">
          <p className="card-text"> {t("Affordable price: since we are manufacturers, our prices are lower than those of intermediaries.")}
          </p>
          <div>
            <img src={ImgThird} />
          </div>
        </div>
      </div>
   </div>
  )
}

export default AboutAss