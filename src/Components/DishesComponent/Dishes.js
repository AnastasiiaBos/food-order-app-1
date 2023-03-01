// import { useState } from 'react';
import { useSelector } from 'react-redux';
import dishesData from '../../data/dishesData';  
import { getSelectedCategory } from '../../redux/dishesSlice';
import Dish from './Dish';

const Dishes = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div>
            {dishesData
            .filter(item => {
                if (selectedCategory === 'ALL') return true;
                // если выбран раздел ALL покажи все блюда - TRUE - пропускает каждый рецепт. т.к. метод filter возвращает true или false
                // если true - Элемент остается в новом массиве, если false - то не проходит фильтрацию и не добавляется в массив
                return  selectedCategory === item.category;
                // верни те блюда у которых название категории из dishesData совпадает с категорией из reducer
            })
            .map(dish => <Dish dish={dish} key={dish.id}/>)}
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