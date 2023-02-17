export const ChangeQuantity = ({quantity, setQuantity}) =>  {
    const addQuantity = () => {
        setQuantity(quantity + 1);
    };
    
    const removeQuantity = () => {
        if (quantity <= 1) return; //нельзя добавить в корзину меньше 1 единицы
        setQuantity(quantity - 1);
    };

    return (
        <div>
            <button onClick={addQuantity}>+</button>
            <span> {quantity} </span>
            <button onClick={removeQuantity}>-</button>
        </div>
    )
};