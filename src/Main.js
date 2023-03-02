import React from 'react';
import Home from '../src/pages/Home/Home';
import AddComentury from './components/AddComentury/AddComentury';
import About from './pages/About/About';
import Delivery from './pages/Delivery/Delivery';
import Products from './pages/Products/Products';





const Main = () => {
    return (
        <main>
           <Home/>
           <About/>
           <AddComentury/>
           <Delivery/>
        </main>
    );
};

export default Main;