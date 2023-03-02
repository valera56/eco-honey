import React from 'react'

function ProductsList(props) {
  return (
    <div className='productlist__listps'>
          <div className="products__column">
                        <div className="products__item">
                            <div className="products__img">
                                <img src={props.todo.image ? props.todo.image: ''} alt="Img" />
                            </div>
                            <div className="products__text-title">
                                <h3>{props.todo.name}</h3>
                            </div>
                                <div className="products__flex">
                                    <span>{props.todo.price}</span>
                                    <span>{props.todo.volume}</span>
                                </div>
                                <div className="products__btn">
                                    <button>Купить</button>
                            </div>
                        </div>
                        
                     </div>
                </div>
            
  )
}

export default ProductsList