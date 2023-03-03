import React, { useState } from "react";
import logo from "../../Assets/images/logo.svg";
import basket from "../../Assets/images/basket.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const handleClickq = () => {
    window.scrollTo(800, 800);
  };
  const handleClick3 = () => {
    window.scrollTo(1550, 1550);
  };
  const handleClick4 = () => {
    window.scrollTo(2900, 2900);
  };
  const handleClick5 = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          <a href="#">
            <h1 className="header__logo">Eco Honey</h1>
          </a>
        </div>
        <nav className="header__nav">
          <ul className="header__list">
            <Link onClick={handleClick5} to={"/todos"} className="header__item">
              <a className="header__link">Главная</a>
            </Link>
            <Link to={"/catalog"} className="header__item">
              <a onClick={handleClick} href="" className="header__link">
                Продукты
              </a>
            </Link>
            <Link className="header__item">
              <a onClick={handleClickq} href="" className="header__link">
                О нас
              </a>
            </Link>
            <Link to={"/comenturu"} className="header__item">
              <a className="header__link">Отзывы</a>
            </Link>
            <Link className="header__item">
              <a onClick={handleClick4} className="header__link">
                Доставка и оплата
              </a>
            </Link>
          </ul>
          <a>
            <Link to={"/cart"}>
              <img src={basket} alt="basket" />
            </Link>
          </a>
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
