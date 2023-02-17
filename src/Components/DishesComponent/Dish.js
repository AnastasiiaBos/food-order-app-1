// import imgOne from '../../../public/img/feta.jpg';

import { useState } from "react";
import { ChangeQuantity } from "../Cart/ChangeQuantity";

const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1);

    return (<div className="center">
    {/* <img src={`../../../public/img/${dish.img}.jpg`} alt="dish" /> */}
        <img src={require(`../../../public/img/${dish.img}.jpg`)} alt="dish"/>
        <h2>{dish.name}</h2>
        <p>$ {dish.price}</p>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
        <button>ADD TO CART</button>
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