// каждый конкретный элемент - фильтр

import { useDispatch, useSelector } from 'react-redux';
import { filterCategory, getSelectedCategory } from '../../redux/dishesSlice';


const Filter = ({category}) => {

    // const selectedCategory = useSelector(state => state.dishes.selectedCategory);
    // либо прописываем в dishesSLice
    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();
    //метод меняющий состояние, нужен нам, чтобы при клике на кнопки с категориями блюд, менялись менялись справа блюда

    // const chooseStyle = () => {
    //     return selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton';
    // } 
    // const chooseStyle = selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton'; // переменная, не ф-я, кот-я изменится в процессе

    return (
        <p className={`${selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton'} center`} 
        onClick={() => dispatch(filterCategory(category))}>
        {/* <div className={`${chooseStyle()} center`}> */}
            {/* выбранная категория подсвечивается зеленым, остальные при наведении - желтым + все они ЦЕНТРИРОВАНЫ*/}
            {category}
        </p>
    )
};

export default Filter;