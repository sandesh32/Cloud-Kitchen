const Tile= (props) => {
    const food=props.food;

    return(
        <div className="product">
            <div className="product_image"> 
                <img src="/images/food.jpg" alt="food"></img>
            </div>
            <div className="title"> 
            {/* Golden Pizza!! */}
                {food.name}
            </div>
            <div className="tags"> 
                 {food.tag.map((ta)=>
                    <span>{ta}</span>
                )}
                {/* <span>tag1</span>
                <span>tag1</span> */}
            </div>
            <div className="price"> 
                <span>
                    ${food.price}
                    {/* 5$ */}
                </span>
                <span>
                    <img src="/images/buy.png" alt="buy"></img>
                </span>
            </div>
        </div>
    );
};
export default Tile;