import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import honey2 from '../../Assets/images/polygon2.png'

const Delivery = () => {
    const { t } = useTranslation();
    const handleClick = () => {
        window.scrollTo(0,0)
    }
    return (
        <section className='delivery'>
            <div className="delivery__container">
                <h2 className='delivery__title'> {t("Shipping and payment")} </h2>
                <div className="delivery__content">
                    <div className="delivery__honey">
                        <img className='delivery__honey-img' src={honey2} alt="Polygon" />
                    </div>
                    <div className="delivery__info">
                        <h3 className='delivery__title-text'>
                            {t("We offer fast and")} <br /> {t("reliable shipping options:")}
                        </h3>
                        <p className='delivery__text'>
                            {t("⦁ Pickup - Kara-Kul, Torokulova street, section 38.")} <br />
                            {t("⦁ Delivery services - Amanat Road, Yldam Express. Delivery")} <br />
                             {t("from 200 soms and more.")} <br />
                                <br />
                                <br />
                                {t("And convenient payment methods:")} <br />
                            {t("⦁ Cash: to the courier - upon delivery, to the seller - upon")} <br />
                             {t("pickup;")} <br />
                            {t("⦁ Via Visa/Elcart bank cards.")}
                        </p>
                        <button onClick={handleClick} className='delivery__btn'><Link to={"/mything"}> {t("More")} </Link></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Delivery;