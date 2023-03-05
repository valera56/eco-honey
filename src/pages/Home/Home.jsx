

import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import main from '../../Assets/images/main.png'



const Home = () => {

    const { t } = useTranslation();
    
    return (
        <div>
<section className='home'>
            <div className ="container">
                <div className="home__container">
                <div className ="home__content">
                    <h2 className='home__title' >{t("Enjoy")} <br /> {t("sweetness of nature")} <br /><span className='home__title-light'> {t("every drop of honey")} <br /> Eco honey</span></h2>
                    <p className='home__text'>{t("We guarantee consumers")} <br /> {t("pure composition and environmental friendliness")} <br /> {t("our honey")} </p>
                    <button className='home__btn'><p className='home__btn-text'><Link to={"/catalog"}>{t("Go to Products")}</Link></p></button>
                </div>
                <div className ="home__img">
                   
                    <img className='home__images' src={main} alt="Main"/>
                </div>
                </div>
                
            </div>
        </section>
       
        </div>
        
        
    );
};

export default Home;