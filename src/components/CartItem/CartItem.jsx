const CartItem = (props) => {
    return (
        <div>
            <h2>Cart</h2>
            <ul>
                <li>{props.product.title}  количество: {props.product.count}</li>
                <li>{props.product.title}  количество: {props.product.count}</li>
                <li>{props.product.title}  количество: {props.product.count}</li>
            </ul>
        </div>
    )
}

export default CartItem