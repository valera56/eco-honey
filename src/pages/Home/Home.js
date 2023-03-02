import React from 'react';
import { Link } from 'react-router-dom';
import main from '../../Assets/images/main.png'

const Home = () => {
    return (
        <section className='home'>
            <div class="container">
                <div className="home__container">
                <div class="home__content">
                    <h2 className='home__title' >Наслаждайтесь <br /> сладостью природы с <br /><span className='home__title-light'> каждой каплей меда <br /> Eco honey</span></h2>
                    <p className='home__text'>Мы гарантируем потребителям <br /> чистый состав и экологичность <br /> нашего меда</p>
                    <button className='home__btn'><p className='home__btn-text'><Link to={"/catalog"}>Перейти в каталог</Link></p></button>
                </div>
                <div class="home__img">
                    <img className='home__images' src={main} alt="Main"/>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Home;