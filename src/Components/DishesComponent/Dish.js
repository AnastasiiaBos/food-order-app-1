// import imgOne from '../../../public/img/feta.jpg';

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import { ChangeQuantity } from "../Cart/ChangeQuantity";

const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return (<div className="center">
    {/* <img src={`../../../public/img/${dish.img}.jpg`} alt="dish" /> */}
        <img src={require(`../../../public/img/${dish.img}.jpg`)} alt="dish"/>
        <h2>{dish.name}</h2>
        <p>$ {dish.price}</p>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
        <button onClick={() => dispatch(addItemToCart({dish, quantity}))}>ADD TO CART</button>
        {/* {dish, quantity} - это объект с ключами dish и quantity, поэтому в {} */}
    </div>)
};

// const Dish = ({name, category, price}) => {
//     return (<div>
//         <h1>{name}</h1>
//         <h2>{category}</h2>
//         <h3>$ {price}</h3>
//     </div>)
// };

export default Dish;