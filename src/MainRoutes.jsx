
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.scss'
import ProductList from "./components/ProductList/ProductList"
import TodosContextProvider from './contexts/TodosComtext';
import Header from "./Layout/Header/Header";
import CartPage from "./pages/CartPage/CartPage"
import Main from "./Main";
import Footer from "./Layout/Footer/Footer";
import AboutAss from "./pages/AboutAss/AboutAss";
import MyThird from "./pages/MyThird/MyThird";
import DelveruAndPlayment from "./pages/DelveruAndPlayment/DelveruAndPlayment";
import Products from "./pages/Products/Products";

const MainRoutes = () => {
    return (
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
                    <MyThird />
                </Route>

                <Route exact path="/catalog">
                <Products/>
                </Route>
            </Switch>
            <Footer/>          
            </TodosContextProvider>
        </BrowserRouter>
    )
}

export default MainRoutes