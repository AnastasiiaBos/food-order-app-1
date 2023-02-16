// import imgOne from '../../../public/img/feta.jpg';

const Dish = ({dish}) => {
    return (<div className="center">
    {/* <img src={`../../../public/img/${dish.img}.jpg`} alt="dish" /> */}
        <img src={require(`../../../public/img/${dish.img}.jpg`)} alt="dish"/>
        <h2>{dish.name}</h2>
        <p>$ {dish.price}</p>

        <button>HOW MANY PORTIONS?</button>
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