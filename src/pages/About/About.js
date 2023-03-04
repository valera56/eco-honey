import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import honey1 from '../../Assets/images/polygon1.png'

const About = () => {
    const { t } = useTranslation();
    const handleClick= () => {
        window.scrollTo(0,0)
    }
    return (
        <section className='about'>
            <div className="about__container">
                <h2 className='about__us'> {t("About Us")} </h2>
                <div className="about__col">
                    <div className="about__info">
                    <h3 className='about__title'> {t("Welcome to Eco honey!")} </h3>
                    <p className='about__text'>
                    {t("Eco honey is a family-owned production of honey products.")} <br />
                    {t("Initially, we produced honey for ourselves, after we started")} <br />
                    {t("share it with others as well.")} <br />
                
                   <br /> {t("Our apiary exists since May 1996 and for 26 years of work")} <br />
                    {t("we were able to increase the number of bee colonies from 16 to")} <br />
                    235.
                    </p>
                    <button onClick={handleClick} className='about__btn'><Link to={"/about"}> {t("More")} </Link></button>
                    </div>
                    <div className="about__honey">
                    <img className='about__honey-img' src={honey1} alt="Honey" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;