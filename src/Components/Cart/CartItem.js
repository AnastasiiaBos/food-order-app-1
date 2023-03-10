//компонент, отвечающий за каждый конкретный элемент добавленный в корзину

import { useDispatch } from "react-redux";
import dishesData from "../../data/dishesData";
import { removeItemFromCart } from "../../redux/cartSlice";

export const CartItem = ({cartItem}) => {

    const dish = dishesData.find(item => item.id === cartItem.dishId);
    // find - метод возвращает значение 1го найденного в массиве элемента, которое удовлетворяет условию переданному в callback ф-и
    // filter - возвращает все найденные значения, а не только 1!

    //2й вариант
    //либо если бы мы cartSlice.js задали бы dishId: action.payload.dish, то не было бы необходимости обращаться к dishesData 
    //и искать там имя соответствующее ключу. 

    // addItemToCart: (state, action) => {
    //     state.cartItems.push({
    //         dish: action.payload.dish, 
    //         quantity: action.payload.quantity
    //     });
    // }

    //Мы бы сразу  обращались к cartItem.dish.name и получали имя
    // <p>{cartItem.dish.name}</p>
    // <p>{cartItem.dish.price}</p>


    const dispatch = useDispatch();

    return (
        <div className="center cartItem">
            <p className="cart">{dish.name}</p>
            <p className="cart">{cartItem.quantity} portion(s)</p>
            <p className="cart">Price: ${dish.price * cartItem.quantity}</p>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
            {/* <span onClick={() => dispatch(removeItemFromCart({cartItem}))}> */}
                {/* ОШИБКА!!
                Если добавляем 2 раза одну и ту же позицию с одинкаовым dishId, то при удалении одного из них вылазит ошибка!
                Поэтому вводим timeId в компонент cartSlice 
                СРАВНИВАЕМ НЕ ПО id - индексу, а по id-ВРЕМЕНИ!!!!*/}
                <img className="deleteIcon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="Delete item"/>    
            </span> 
        </div>
    )
}