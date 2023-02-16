// import { useState } from 'react';
import dishesData from '../../data/dataDishes';  
import Dish from './Dish';

const Dishes = () => {
    
    return (
        <div>
            {dishesData.map(item => <Dish dish={item} key={item.id}/>)}
        </div>
    )
};


// const Dishes = () => {
//     const [dishesList, setDishesList] = useState(dishesData);
    
//     return (
//         <div>
//             {dishesList.map((item) => (
//                 <Dish 
//                 key={item.id}
//                 img={item.img}
//                 name={item.name}
//                 category={item.category}
//                 price={item.price}
//                 />
    
//             ))}
//         </div>
//     )
// };

export default Dishes;