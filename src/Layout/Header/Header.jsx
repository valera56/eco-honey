import React, { useContext, useState } from "react";
import logo from "../../Assets/images/logo.svg";
import basket from "../../Assets/images/basket.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { todosContext } from "../../contexts/TodosComtext";
const Header = () => {
  const {getTodosRu,getTodosEn} = useContext(todosContext)
  const { t, i18n } = useTranslation();

  const toggleLanguage = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : '')
    getTodosEn()
    
  }

  const toggRuleLanguage = async () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : '')
    getTodosRu()
  }

  const handleClick5 = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          
          <Link to="/todos" >
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/todos">
          
            <h1 className="header__logo">Eco Honey</h1>
          
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__list">
            <Link onClick={handleClick5} to={"/todos"} className="header__item">
              <a className="header__link">{t("home")}</a>
            </Link>
            <Link to={"/catalog"} className="header__item">
              <a  href="" className="header__link">
               {t("Products")}
              </a>
            </Link>
            <Link to={"/aboutAss"} className="header__item">
              <a  href="" className="header__link">
               {t("About Us")}
              </a>
            </Link>
            
            <Link to={"/stayte"} className="header__item">
              <a  className="header__link">
               {t("Shipping and payment")}
              </a>
            </Link>
          </ul>
          <ul>
            <button onClick={toggleLanguage} className="button__en">en</button>
            <button onClick={toggRuleLanguage} className="button__ry">ру</button>
          </ul>
          <a>
            <Link to={"/cart"}>
              <img src={basket} alt="basket" />
            </Link>
          </a>
          <a href="http://18.182.53.101/admin/login/?next=/admin/">admin</a>
          <button className="header__burger-btn">
            <svg
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 19V21.6667H4V19H20ZM24 9.66668V12.3333H0V9.66668H24ZM20 0.333344V3.00001H4V0.333344H20Z"
                fill="#1E1E1E"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
