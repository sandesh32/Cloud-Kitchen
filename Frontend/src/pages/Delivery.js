const Delivery=()=>{
    return(
        <div >
            {/* <div className="inside">
                center this
            </div> */}
            <hr className="dividerLine"></hr>
            <div className="cartHeading">Delivery</div>
            

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
                            <div className="itemName">From: Chitoor - 12, 632014</div>
                            <div className="itemName">To: A- Block Mens hostel</div>
                            
                        </div>
                        <div className="take">Take</div>
                    </div>

                    <div className="cart">
                        <div className="cartImagebox">
                            <img src="images/mushroompizza.png" className="cartImage"></img>
                        </div>
                        <div className="cartInfo">
                            <div className="itemName">Mushroom Pizza</div>
                            <div className="itemName">From: Chitoor - 12, 632014</div>
                            <div className="itemName">To: A- Block Mens hostel</div>
                        </div>
                        <div className="take">Take</div>
                    </div>
                    
            </div>
            
        </div>
    )
};
export default Delivery;