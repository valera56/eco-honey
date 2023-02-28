import { useContext } from "react"
import { todosContext } from "../../contexts/TodosComtext"

const ProductItem = (props) => {
    
    const {addToCart} = useContext(todosContext) 

    const handleAddClick = () => {
        addToCart(props.product)
    }

    return (
        <li>
            <h3>{props.product.title}</h3>
            <p>{props.product.price} сом</p>
            <p>{props.product.weight} кг</p>
            <button onClick={handleAddClick} >Купить</button>
        </li>
    )
}

export default ProductItem