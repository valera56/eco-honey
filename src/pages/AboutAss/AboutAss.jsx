import React from 'react'
import './css/main.css'
import './css/media.css'
import ImgFirst from './img/Frame 24.svg'
import ImgSecond from './img/Frame 25.svg'
import ImgThird from './img/Frame 27.svg'

function AboutAss() {
  return (
   <div>
    <h1 className="name">В чем уникальность меда Eco honey?</h1>
      <div className="contents row">
        <div className="card col w-18r">
          <p className="card-text">Экологичность: мы держим пасеку исключительно на высокогорных жайлоо Гүдү и
            Чоң-Дөбө Джалал-Аб адской обл.
          </p>
          <div>
            <img src={ImgFirst} />
          </div>
        </div>
        <div className="card col w-18r">
        <div className="img_second">
            <img src={ImgSecond} />
          </div>
          <p className="card-text content_second">0% примесей: мы не добавляем сахар и пр.примеси в мед.
          </p>
        </div>
        <div className="card col w-18r">
          <p className="card-text">Доступная цена: так как мы являемся производителями, цены у нас ниже, чем у посредников.
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