import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { todosContext } from "../../contexts/TodosComtext";
import ProductItem from "../ProductItem/ProductItem";

const ProductList =() => {
    const { products, getProducts} = useContext(todosContext)

    useEffect(() => {
        getProducts()
    })

    return (
        <div>
            <Link to="/cart">Перейти в корзину</Link>
            <ul>
                <h2> Honey</h2>
                {products.map((product) => {
                    return <ProductItem key={product.id} product = {product} />
                })}
            </ul>
        </div>
    )
}

export default ProductList