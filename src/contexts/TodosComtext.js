import { createContext, useReducer } from "react";


export const todosContext = createContext();


const INITIAL_STATE = {
    todoData: [],
  };


  
export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {


        default:
      return state;
    }
}

const TodosContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE); 



    return (
        <todosContext.Provider 
        value={{
         todoData: state.todoData
        }}
        >
            {children}
        </todosContext.Provider>
    )
}

export default TodosContextProvider;