import React from 'react';
import { Link } from 'react-router-dom';
import honey1 from '../../Assets/images/polygon1.png'

const About = () => {
    const handleClick= () => {
        window.scrollTo(0,0)
    }
    return (
        <section className='about'>
            <div className="about__container">
                <h2 className='about__us'>О нас</h2>
                <div className="about__col">
                    <div className="about__info">
                    <h3 className='about__title'>Добро пожаловать на Eco honey!</h3>
                    <p className='about__text'>
                    Eco honey – это семейное производство медовой продукции. <br />
                    Изначально мы производили мед для себя, после начали <br />
                    делиться им и с другими желающими. <br />
                
                   <br /> Наша пасека существует с мая 1996 года и за 26 лет работы <br />
                    мы смогли увеличить количество пчелиных семей с 16-ти до <br />
                    235.
                    </p>
                    <button onClick={handleClick} className='about__btn'><Link to={"/about"}>Подробнее</Link></button>
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