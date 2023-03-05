import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { todosContext } from "../../contexts/TodosComtext";
import "../CartPage/CartPage.css"

const Cart = () => {
  const {cart, addToCart, removeFromCart, todos,  incrementCartProduct, getTodos} = useContext(todosContext)
  const [cartProducts, setCartProducts] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    const storedCartProducts = localStorage.getItem("cartItems");
    if (storedCartProducts) {
      setCartProducts(JSON.parse(storedCartProducts));
    //   console.log(storedCartProducts)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartProducts));
  }, [cartProducts]);

//   const addToCart = (item) => {
//     const cartItem = cart.cartProducts.find((cartProduct) => cartProduct.id === item.id);
//     if (cartItem) {
//       setCartProducts(
//         cart.cartProducts.map((cartProduct) =>
//           cartProduct.id === item.id ? { ...cartProduct, count: cartProduct.count + 1 } : cartProduct
//         )
//       );
//     } else {
//       setCartProducts([...cartProducts, { ...item, count: 1 }]);
//     }
//   };



//   const removeFromCart = (item) => {
//     const cartItem = cartProducts.find((cartProduct) => cartProduct.id === item.id);
//     if (cartItem.count === 1) {
//       setCartProducts(cartProducts.filter((cartProduct) => cartProduct.id !== item.id));
//     } else {
//       setCartProducts(
//         cartProducts.map((cartProduct) =>
//           cartProduct.id === item.id ? { ...cartProduct, count: cartProduct.count - 1 } : cartProduct
//         )
//       );
//     }
//   };
//   const itemCount = cartProducts.reduce((total, item) => total + item.count, 0);

// useEffect(() => {
//  getTodos()
// })


  return (
    <div className = "cart">
    <div className="cart_top">
    <h2> {t("Your shopping cart")} </h2>
    </div>
    
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
        <div className="cart_main_div">
          <ul>

            {cart.cartProducts.map((item) => (
              <li key={item.id}>
               
                    <img src={item.image} alt="product" />
              
                
                <div className="cart_details">
                <span className="cart__product_title">{item.title}</span>
                <p className="cart_product_description">{item.description}</p>
                <span className="cart_product_price">{item.price} сом</span>
                <p className="cart_quantity">Количество</p>
                <div className="cart_btn_quantity">
                <button onClick={() => removeFromCart(item.id)}>-</button>
                <span>{item.count}</span>
                <button onClick={() => incrementCartProduct(item)}>+</button>
                </div>
                </div>
               
              </li>
            ))}
          </ul>
          </div>
          <div className="cart_bottom">
          <button className="cart_btn_buy"> {t("Buy")} </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
