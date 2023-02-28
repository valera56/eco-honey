import React from 'react';
import img1 from '../../Assets/images/img1.png'
import img2 from '../../Assets/images/img2.png'
import img3 from '../../Assets/images/img3.png'
import img4 from '../../Assets/images/img4.png'

const Products = () => {
    return (
        <section className='products'>
            <div className="products__container">
                <div className="products__title">
                    <h2 className="title">Продукты</h2>
                </div>
                <div className="products__category">
                    <select>
                        <option className='products__option-sort'>Сортировать по</option>
                    </select>
                    <select>
                        <option className='products__option-category'>Категории</option>
                    </select>
                </div>
                <div className="products__column">
                    <div className="products__item">
                        <div className="products__img">
                            <img src={img1} alt="Img" />
                        </div>
                        <div className="products__text-title">
                            <h3>Сотовый мёд</h3>
                        </div>
                            <div className="products__flex">
                                <span>275 сом</span>
                                <span>1 кг</span>
                            </div>
                            <div className="products__btn">
                                <button>Купить</button>
                        </div>
                    </div>
                    <div className="products__item">
                        <div className="products__img">
                            <img src={img1} alt="Img" />
                        </div>
                        <div className="products__text-title">
                            <h3>Сотовый мёд</h3>
                        </div>
                            <div className="products__flex">
                                <span>275 сом</span>
                                <span>1 кг</span>
                            </div>
                            <div className="products__btn">
                                <button>Купить</button>
                        </div>
                    </div>
                    <div className="products__item">
                        <div className="products__img">
                            <img src={img2} alt="Img" />
                        </div>
                        <div className="products__text-title">
                            <h3>Сотовый мёд</h3>
                        </div>
                            <div className="products__flex">
                                <span>275 сом</span>
                            </div>
                            <div className="products__btn">
                                <button>Купить</button>
                            </div>
                 </div>
                    <div className="products__item">
                        <div className="products__img">
                            <img src={img2} alt="Img" />
                        </div>
                        <div className="products__text-title">
                            <h3>Сотовый мёд</h3>
                        </div>
                            <div className="products__flex">
                                <span>275 сом</span>
                            </div>
                            <div className="products__btn">
                                <button>Купить</button>
                            </div>
                 </div>
                    <div className="products__item">
                        <div className="products__img">
                            <img src={img3} alt="Img" />
                        </div>
                        <div className="products__text-title">
                            <h3>Сотовый мёд</h3>
                        </div>
                            <div className="products__flex">
                                <span>275 сом</span>
                            </div>
                            <div className="products__btn">
                                <button>Купить</button>
                            </div>
                 </div>
                    <div className="products__item">
                        <div className="products__img">
                            <img src={img3} alt="Img" />
                        </div>
                        <div className="products__text-title">
                            <h3>Сотовый мёд</h3>
                        </div>
                            <div className="products__flex">
                                <span>275 сом</span>
                            </div>
                            <div className="products__btn">
                                <button>Купить</button>
                            </div>
                 </div>
                    <div className="products__item">
                        <div className="products__img">
                            <img src={img4} alt="Img" />
                        </div>
                        <div className="products__text-title">
                            <h3>Сотовый мёд</h3>
                        </div>
                            <div className="products__flex">
                                <span>275 сом</span>
                            </div>
                            <div className="products__btn">
                                <button>Купить</button>
                            </div>
                 </div>
                    <div className="products__item">
                        <div className="products__img">
                            <img src={img4} alt="Img" />
                        </div>
                        <div className="products__text-title">
                            <h3>Сотовый мёд</h3>
                        </div>
                            <div className="products__flex">
                                <span>275 сом</span>
                            </div>
                            <div className="products__btn">
                                <button>Купить</button>
                            </div>
                 </div> 
                 </div>
            </div>
        </section>
    );
};

export default Products;