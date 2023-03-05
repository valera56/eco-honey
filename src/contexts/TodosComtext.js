import axios from "axios";
import { createContext, useReducer, useState } from "react";
import { useHistory } from "react-router-dom";

export const todosContext = createContext();


const INITIAL_STATE = {
  products: [],
  currentProduct: {},
  cart: {
    cartProducts: [],
  },
  commit: [],
  limit: 3,
  page: 1,
  totalCount: 0,
  totalComent: 0,
  todos: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_COMMENTATY":
      return {
        ...state,
        commit: action.payload.data,
        totalCount: action.payload.totalCount,
      };

    case "ADD_COMMENTARY":
      return { ...state, commit: [...state.commit, action.payload] };

    case "SET_PAGE":
      return { ...state, page: action.payload };

    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.data,
        totalComent: action.payload. totalComent,
      };
    case "GET_CURRENT_PRODUCT":
      return { ...state, currentProduct: action.payload };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: {
          cartProducts: [
            ...state.cart.cartProducts.filter(
              (cartProduct) => cartProduct.id !== action.payload.id
            ),
            {
              ...action.payload,
              count:
                state.cart.cartProducts.find(
                  (item) => item.id === action.payload.id
                )?.count + 1 || 1,
            },
          ],
        },
        totalCount: state.totalCount + 1,
      };

    case "INCREMENT_TOTAL_COUNT":
      return {
        ...state,
        totalCount: state.totalCount + 1,
      };

      case "INCREMENT_CART_PRODUCT": 
      return {
          ...state,
          cart: {
            cartProducts: [
              ...state.cart.cartProducts.map((cartProduct) => {
                if(cartProduct.id === action.payload.id) {
                  return {
                    ...action.payload,
                    count:
                  (state.cart.cartProducts.find((item) => item.id === action.payload.id)?.count || 0) + 1
                  };
                } else {
                  return {
                    ...cartProduct
                  };
                }
              }),
           
            ]
          },
          totalCount: state.totalCount + 1,
        };

    case "REMOVE_FROM_CART":
      const updatedCartProducts = state.cart.cartProducts
        .map((item) => {
          if (item.id === action.payload.id) {
            if (item.count > action.payload.count) {
              return { ...item, count: item.count - action.payload.count };
            } else {
              return null;
            }
          } else {
            return item;
          }
        })
        .filter((item) => item !== null);
      return {
        ...state,
        cart: {
          cartProducts: updatedCartProducts,
        },
        totalCount: state.totalCount - action.payload.count,
      };
    case "DECREMENT_TOTAL_COUNT":
      return {
        ...state,
        totalCount: state.totalCount - action.payload,
      };

      case "GET_TODOS":
      return { ...state, todos: action.payload };

    default:
      return state;
  }
};

const TodosContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const history = useHistory();

  const [rating, setRating] = useState(3);

  const getCommetaty = async () => {
    const { data} = await axios (
      `http://18.182.53.101/api/feedbacks/${history.location.search}` );
    dispatch({
      type: "GET_COMMENTATY",
      payload: {
        data: data.results, 
       totalCount: data.count
      },
    });
  };

  const addComent = async (obj) => {
    const { data } = await axios.post(`http://18.182.53.101/api/feedbacks/`, obj);
    dispatch({
      type: "ADD_COMMENTARY",
      payload: data,

    });
  };

  const setQuery = (key, value) => {
    const search = new URLSearchParams(history.location.search);
    if (value) {
      search.set(key, value);
    } else {
      search.delete(key);
    }
    history.push(`/todos?${search.toString()}`);
  };

  const getPagination = (value) => {
    setQuery("limit", state.limit);
    setQuery("page", value);
    getCommetaty();
  };

  const setPage = async (page) => {
    dispatch({
      type: "SET_PAGE",
      payload: page,
    });
  };

  const getProducts = async () => {
    const { data, headers } = await axios(
      `http://localhost:8000/products${history.location.search}`
    );

    dispatch({
      type: "GET_PRODUCTS",
      payload: {
        data: data,
        totalCount: Number(headers["x-total-count"]),
      },
    });
  };

  const getCurrentProduct = async (id) => {
    const { data } = await axios(`http://localhost:8000/products/${id}`);
    dispatch({
      type: "GET_CURRENT_PRODUCT",
      payload: data,
    });
  };

  const addToCart = (product) => {
    localStorage.setItem("cartItems", JSON.stringify(state.cart.cartProducts));
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const incrementCartProduct = (product) => {
    localStorage.setItem("cartItems", JSON.stringify(state.cart.cartProducts));
    dispatch({
      type: "INCREMENT_CART_PRODUCT",
      payload: product,
    });
  };

  // const addToCart = (product) => {
  //     const existingItem = state.cart.cartProducts.find(item => item.id === product.id);
  //     let updatedCartProducts = [];
  //     if (existingItem) {
  //         const updatedItem = { ...existingItem, count: existingItem.count + 1 };
  //         const updatedCartProducts = [
  //             updatedItem,
  //             ...state.cart.cartProducts.filter(item => item.id !== existingItem.id),
  //         ];
  //         dispatch({
  //             type: "ADD_TO_CART",
  //             payload: updatedCartProducts,
  //         });
  //     } else {
  //         const updatedCartProducts = [
  //             { ...product, count: 1 },
  //             ...state.cart.cartProducts,
  //         ];
  //         dispatch({
  //             type: "ADD_TO_CART",
  //             payload: updatedCartProducts,
  //         });
  //     }
  //     localStorage.setItem("cartItems", JSON.stringify(updatedCartProducts));
  //     dispatch({
  //         type: "INCREMENT_TOTAL_COUNT",
  //     });
  // };

  const removeFromCart = (productId) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));

    const updatedCartProducts = cartItems
      .map((item) => {
        if (item.id === productId) {
          if (item.count > 1) {
            return { ...item, count: item.count - 1 };
          } else {
            return null;
          }
        } else {
          return item;
        }
      })
      .filter((item) => item !== null);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartProducts));
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { id: productId, count: 1 },
    });
    dispatch({
      type: "DECREMENT_TOTAL_COUNT",
      payload: 1,
    });
  };

  const getCartProducts = () => {
    localStorage.getItem("cartItems");
  };

  const getTodos = async () => {
    const { data, headers } = await axios(`http://18.182.53.101/api/products/`);
    dispatch({
      type: "GET_TODOS",
      payload: data.results

    })
  }

  const getTodosRu = async () => {
    const { data } = await axios(`http://18.182.53.101/api/products/?category=11`);
    console.log(data)
    dispatch({
      type: "GET_TODOS",
      payload: data.results
      

    })
  }
  const getTodosEn = async () => {
    const { data } = await axios(`http://18.182.53.101/api/products/?category=10`);
    console.log(data)
    dispatch({
      type: "GET_TODOS",
      payload: data.results
      

    })
  }
  
  

  return (
    <todosContext.Provider
      value={{
        todoData: state.todoData,
        commit: state.commit,
        limit: state.limit,
        totalCount: state.totalCount,
        page: state.page,
        products: state.products,
        currentProduct: state.currentProduct,
        cart: state.cart,
        todos: state.todos,
        rating,
        getCommetaty,
        addComent,
        setPage,
        getPagination,
        setRating,
        addToCart,
        removeFromCart,
        getProducts,
        getCurrentProduct,
        getCartProducts,
        incrementCartProduct,
        getTodos,
        getTodosEn,
        getTodosRu
      }}
    >
      {children}
    </todosContext.Provider>
  );
};

export default TodosContextProvider;
