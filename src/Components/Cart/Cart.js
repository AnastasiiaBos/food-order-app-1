import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import { CartItem } from "./CartItem";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    //считываем состояние getCartItems - массив с item, добавленными в корзину

    const totalPrice = useSelector(getTotalPrice);

    return (
        <div>
            <img className="cartIcon" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png" alt="cart" /> 
            <h3 className="center">TOTAL: ${totalPrice}</h3>
            {cartItems.map( item => {
            return <CartItem cartItem={item} key={'item-' + item.id} />})}
            
        </div>
    )
};

export default Cart;