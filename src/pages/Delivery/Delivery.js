import React from 'react';
import { Link } from 'react-router-dom';
import honey2 from '../../Assets/images/polygon2.png'

const Delivery = () => {
    const handleClick = () => {
        window.scrollTo(0,0)
    }
    return (
        <section className='delivery'>
            <div className="delivery__container">
                <h2 className='delivery__title'>Доставка и оплата</h2>
                <div className="delivery__content">
                    <div className="delivery__honey">
                        <img className='delivery__honey-img' src={honey2} alt="Polygon" />
                    </div>
                    <div className="delivery__info">
                        <h3 className='delivery__title-text'>
                            Мы предлагаем быстрые и <br /> надежные варианты доставки:
                        </h3>
                        <p className='delivery__text'>
                            ⦁	Самовывоз - г.Кара-Куль, ул.Торокулова, участок 38. <br />
                            ⦁	Службы доставки – Аманат роуд, Ылдам экспресс. Доставка <br />
                             от 200 сом и более. <br />
                                <br />
                                <br />
                                И удобные способы оплаты: <br />
                            ⦁	Наличными: курьеру – при доставке, продавцу – при <br />
                             самовывозе; <br />
                            ⦁	Через банковские карты Visa/Элкарт.
                        </p>
                        <button onClick={handleClick} className='delivery__btn'><Link to={"/mything"}>Подробнее</Link></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Delivery;