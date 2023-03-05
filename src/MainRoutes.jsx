
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.scss'
import ProductList from "./components/ProductList/ProductList"
import TodosContextProvider from './contexts/TodosComtext';
import Header from "./Layout/Header/Header";
import CartPage from "./pages/CartPage/CartPage"
import Main from "./Main";
import Footer from "./Layout/Footer/Footer";
import AboutAss from "./pages/AboutAss/AboutAss";
import DelveruAndPlayment from "./pages/DelveruAndPlayment/DelveruAndPlayment";
import Products from "./pages/Products/Products";
import AddComentury from "./components/AddComentury/AddComentury";
import { Suspense } from "react";

const MainRoutes = () => {
    return (
         <Suspense fallback="">
        <BrowserRouter>
       <TodosContextProvider>
           <Header/>
             
           <Switch>
               <Route exact path = "/">
                   <ProductList/>
               </Route>
               <Route exact path="/cart">
                  
                  <CartPage />
               </Route>
               <Route exact path="/mything">
                    <DelveruAndPlayment />
               </Route>
               <Route exact path="/todos">
                  <Main />
               </Route>
               <Route exact path="/about">
                   <AboutAss/>
                  
               </Route>
               <Route exact path="/stayte">
               <DelveruAndPlayment />
               </Route>
               <Route exact path="/aboutAss">
               <AboutAss/>
               </Route>



               <Route exact path="/catalog">
               <Products/>
               </Route>
               
           </Switch>
           <Footer/>          
           </TodosContextProvider>
       </BrowserRouter>
        </Suspense>
        
    )
}

export default MainRoutes