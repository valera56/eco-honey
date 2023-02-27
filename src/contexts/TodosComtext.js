import axios from "axios";
import { createContext, useReducer, useState } from "react";
import { useHistory } from "react-router-dom";


export const todosContext = createContext();


const INITIAL_STATE = {
    todoValueStars: [],
    todoData: [],
    commit:[],
    limit: 3,
  page: 1,
  totalCount: 0,
  };


  
export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case "GET_COMMENTATY":
            return { ...state, 
              commit: action.payload.data,
              totalCount: action.payload.totalCount
             };



            case "ADD_COMMENTARY":
      return { ...state, commit: [...state.commit, action.payload] };


      case "SET_PAGE":
      return { ...state, page: action.payload };
        default:
      return state;
    }
}

const TodosContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE); 
      
    const history = useHistory();

    const [rating, setRating] = useState(3);

    const getCommetaty = async () => {
        const { data , headers } = await axios(`http://localhost:8000/comenturys${history.location.search}`);
        
        dispatch({
          type: "GET_COMMENTATY",
          payload: {
            data : data,
            totalCount: Number(headers["x-total-count"]),
          }
          
        });
      };

      const addComent = async (obj) => {
        const { data } = await axios.post(`http://localhost:8000/comenturys`, obj);
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
        history.push(`/comenturys?${search.toString()}`);
      };

      const getPagination = (value) => {
        setQuery("_limit", state.limit);
        setQuery("_page", value);
        getCommetaty()
      };
    
      const setPage = (page) => {
        dispatch({
          type: "SET_PAGE",
          payload: page,
        });
      };

      


    return (
        <todosContext.Provider 
        value={{
          todoValueStars: state.todoValueStars,
         todoData: state.todoData,
         commit: state.commit,
         limit: state.limit,
        totalCount: state.totalCount,
        page: state.page,
        rating,
         getCommetaty,
         addComent,
         setPage,
         getPagination,
        
         setRating,
        }}
        >
            {children}
        </todosContext.Provider>
    )
}

export default TodosContextProvider;