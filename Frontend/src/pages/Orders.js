
const Orders=()=>{
    return(
        <div >
            {/* <div className="inside">
                center this
            </div> */}
            <hr className="dividerLine"></hr>
            <div className="cartHeading">Orders</div>
            

            <div className="cartbox">
            <div className="classtop">
                <span className="toggle active">Delivery</span>
                <span className="toggle">Cooking</span>
            </div>
                <div className="cart">
                        <div className="cartImagebox">
                            <img src="images/mushroompizza.png" className="cartImage"></img>
                        </div>
                        <div className="cartInfo">
                            <div className="itemName">Mushroom Pizza</div>
                            <div className="itemName">Quantity</div>
                        </div>
                        <div className="take">Take</div>
                    </div>

                    <div className="cart">
                        <div className="cartImagebox">
                            <img src="images/mushroompizza.png" className="cartImage"></img>
                        </div>
                        <div className="cartInfo">
                            <div className="itemName">Mushroom Pizza</div>
                            <div className="itemName">Quantity</div>
                        </div>
                        <div className="take">Take</div>
                    </div>
                    
            </div>
            
        </div>
    )
};
export default Orders