// import imgOne from '../../../public/img/feta.jpg';

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import { ChangeQuantity } from "../Cart/ChangeQuantity";

const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1);
    //изменение логики и состояния этого компонента не затрагивает другие, и нет смысла выносить это в общее состояние redux
    //хотя можно и с redux

    const dispatch = useDispatch();

    return (<div className="center">
    {/* <img src={`../../../public/img/${dish.img}.jpg`} alt="dish" /> - не работает, вылазит ошибка что нельзя обратиться на столько вверх*/}
        {/* можно положить в ту же папку или использлвать require: */}
        <img src={require(`../../../public/img/${dish.img}.jpg`)} alt="dish"/>
        <h2>{dish.name}</h2>
        <p>$ {dish.price}</p>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
        <button className="addBtn" onClick={() => dispatch(addItemToCart({dish, quantity}))}>Add to cart</button>
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