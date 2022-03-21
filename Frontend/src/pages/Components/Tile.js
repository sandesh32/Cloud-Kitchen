const Tile= (props) => {
    const index = props.index;
    const product = props.product;
    return(
        <div key={index}>
            <div className="product">
                <div className="product_image">
                    <img src="images/food.jpg" alt=""></img>
                </div>
                <div className="title">
                    {product.name}
                </div>
                <div className="tags">
                    <span>{product.type}</span>
                    <span>Tag2</span>
                </div>
                <div className="price">
                    <span>
                        {product.price}
                    </span>
                    <span>
                        <img src="images/buy.png"></img>
                    </span>
                </div>
            </div>
        </div>
    );
};
export default Tile;