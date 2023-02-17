// reducers для РЕЦЕПТОВ

import { createSlice } from '@reduxjs/toolkit'

export const dishesSlice = createSlice({
    name: 'dishes',
    initialState: { //либо можно вынести отдельную переменную const initialState - ПЕРВОНАЧАЛЬНОЕ СОСТОЯНИЕ
        selectedCategory: 'SEAFOOD' //когда загружается страница первой отображается эта категория и ее содержимое
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
    }
})

export const getSelectedCategory = state => state.dishes.selectedCategory;
// чтобы в Filter в useSelector(getSelectedCategory) либо там прописать :
// const selectedCategory = useSelector(state => state.dishes.selectedCategory);

export const { filterCategory } = dishesSlice.actions;

export default dishesSlice.reducer;