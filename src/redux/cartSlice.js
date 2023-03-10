// reducers для КОРЗИНЫ
import { createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
    name: 'cart', //название reducera
    initialState: { // initialState - ПЕРВОНАЧАЛЬНОЕ СОСТОЯНИЕ
        cartItems: [] //пустой массив, в кот-й будут добавляться товары
    },
    reducers: {
        addItemToCart: (state, action) => { // инструкция, как будет меняться состояние 

            const timeId = new Date().getTime();

            state.cartItems.push({ //при добавлении item в корзину
                id: timeId, // ввели его как уникальный ключ! иначе при добавлении НЕСКОЛЬКИХ одинаковых позиций, происходит дублирования ключа dishId
                dishId: action.payload.dish.id, //dish - должен совпадать с тем, что придет в качесве параметра во время вызова dispatch(addItemToCart({dish, quantity}))
                quantity: action.payload.quantity, //quantity - должен совпадать с тем, что придет в качесве параметра во время вызова dispatch(addItemToCart({dish, quantity}))
                //а вот название ключа  например food: action.payload.dish играет роль только в компоненте CardItem, где выводится значение ключа
            
                totalPrice: action.payload.quantity * action.payload.dish.price
                // общая цена всей корзины считается исходы из каждого эл-та (кол-во*цену)
            });
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter( 
                //filter создает новый массив, поэтому присваиваем его в старый []
                item => {
                    return item.id !== action.payload.cartItemId
                    // item.id - это timeId
                })

            //в обновленный массив попадут только отфильтрованные эл-ты, у которых id не равен тому id, который будет задан при обновлении состояния
        }
    }
})

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItem) => {
        return total + cartItem.totalPrice
    }, 0)
};
// reduce- метод сворачивает массив , его параметры: 1) total (результирующее значение) сперва = 0, затем запоминает предыдущий
// результат выполнения ф-и; 2) cartItem - текущий эл-т массива, который плюсует totalPrice каждого эл-та (=кол-во*ценa)


export const getCartItems = state => state.cart.cartItems;
// какое изменение бы будем отслеживать? изменение сожержимого корзины

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;