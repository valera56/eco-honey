import React from 'react'
import locaionMap from './img/image 6.svg'
import "../MyThird/MyThird.css"
import { useTranslation } from 'react-i18next';
function MyThird() {
  const { t } = useTranslation();
  return (
        <div className="container">
      <div className='head_about_us'>
        <h1> {t("About Us")} </h1>
      </div>
      <div className='content_about_us'>
        <h3
        > {t("Welcome to Eco honey!")} </h3>
        <p>
          {t("Eco honey is a family-owned production of honey products. Initially, we produced honey for ourselves, after that we began to share it with")} <br /> {t("others who wish.")}
        </p>
        <p>
          {t("Our apiary has existed since May 1996, it was founded by my father, Zhumataev Eric Askarbekovich. During these 26 years, honey production has become")} <br /> {t("us not just a family business, but a lifelong business!")}
        </p>
        <p>
          {t("Our mission is to heal the population, I provide the purest high-mountain honey.")}
        </p>
        <p>
          {t("What is the uniqueness of Eco honey?")}
        </p>
        <ul>
          <li>
           {t("Environmental friendliness: we keep an apiary exclusively on the high-mountain jailoo Gudu and Chon-Dobo of the Jalal-Abad region.")}
          </li>
          <li>
            {t("0% impurities: we do not add sugar and other impurities to honey.")}
          </li>
          <li>
            {t("Affordable price: since we are manufacturers, our prices are lower than those of intermediaries.")}
          </li>
        </ul>
        <p> {t("What breeds of bees are kept in the apiary?")} </p>
        <p>
          {t("Now we keep the Karnika and Buckfast breeds - peaceful European breeds of bees that tolerate high mountains well.")}
        </p>
        <p>
          {t("Previously, they also worked with Central Russian and Carpathian breeds.")}
        </p>
        <p>
          {t("For 26 years of work, they were able to increase the number of bee colonies from 16 to 235.")}
        </p>
      </div>
      <div className='head_shipping_and_payment'>
        <h1> {t("Shipping and payment")} </h1>
      </div>
      <div className='content_shipping_and_payment'>
      <p> {t("We offer fast and reliable delivery options:")} </p>
      <ul>
        <li> {t("Pickup - select Pickup when placing an order, we will prepare it and you can pick up the order at:")} <br /> {t("Kyrgyzstan, Jalal-Abad region, Kara-Kul city, Torokulova street, section 38.")} </li>
      </ul>
      <p> {t("How can I find you?")} </p>
      </div>
      <br /><br/><br /><br/><br /><br/>
      <div className='img_shopping_and_payment'>
        {/* <img
          style={{display: 'flex', justifyContent: 'center'}}
         src={locaionMap} /> */}
         <div>
         <section class="section-map">
        
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A763462f86d9b653ed6c5061c05f3933237a812ddc849ac08409e3c9bfbdf98ac&amp;source=constructor"
          width="1200"
          height="400"
          frameborder="0"
        ></iframe>
      </section>
         </div>
      </div><br /><br/><br/>
      <div className='courier_info'>
        <ul>
          <li> {t("Through delivery services - Amanat Road, Yldam Express. Delivery from 200 soms and more.")} </li>
        </ul>
        <p>
          {t("Also, when placing an order, select “via delivery service”, we will prepare your order and send it via courier. If you pay for the order in cash, the money will need to be given to the courier. And pay the shipping cost.")} <br />
          {t("Payment Methods:")}
        </p>
        <ul>
          <li> {t("⦁ Cash: to the courier - upon delivery, to the seller - upon")} {t("pickup;")} </li>
          <li> {t("⦁ Via Visa/Elcart bank cards.")} </li>
        </ul>
      </div>
    </div>
  )
}

export default MyThird