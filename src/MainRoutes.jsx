
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.scss'
import ProductList from "./components/ProductList/ProductList"
import TodosContextProvider from './contexts/TodosComtext';
import Header from "./Layout/Header/Header";
import CartPage from "./pages/CartPage/CartPage"
import Main from "./Main";
import Footer from "./Layout/Footer/Footer";
import AboutAss from "./pages/AboutAss/AboutAss";

const MainRoutes = () => {
    return (
        <BrowserRouter>
        <TodosContextProvider>
            <Header/>
           <Main/>
            <Switch>
                <Route exact path = "/">
                    <ProductList/>
                </Route>
                <Route exact path="/cart">
                   <CartPage />
                </Route>
                
            </Switch>
            <Footer/>          
            </TodosContextProvider>
        </BrowserRouter>
    )
}

export default MainRoutes