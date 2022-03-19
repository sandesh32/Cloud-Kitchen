const Tile= () => {
    return(
        <div className="product">
            <div className="product_image"> 
                <img src="images/food.jpg" alt=""></img>
            </div>
            <div className="title"> 
                GOlden Pizza!!
            </div>
            <div className="tags"> 
                <span>Tag1</span>
                <span>Tag2</span>
            </div>
            <div className="price"> 
                <span>
                    30$
                </span>
                <span>
                    <img src="images/buy.png"></img>
                </span>
            </div>
        </div>
    );
};
export default Tile;