import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div>
            <h1>What kind of food do you like?</h1>

            {/* почему не берем из dataDishes категории? потому что с ними будем сравнивать! */}
            {['SEAFOOD', 'ITALIAN', 'APPETIZERS', 'SALADS', 'ALL']
            .map( category => <Filter category={category} />)}
            
        </div>
    )
};

export default AllCategories;