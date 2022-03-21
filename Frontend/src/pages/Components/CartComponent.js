const CartComponent = () => {
    return ( 
        <div className = "cartContainer">
            <hr className="dividerLine"></hr>
            <div className="cartHeading">Cart</div>
            <div className="cartBody">
                <div className="cartItems">
                    <div className="cartItem">
                        <div className="itemImage">
                            <img src="images/mushroompizza.png"></img>
                        </div>
                        <div className="itemInfo">
                            <div className="itemName">Mushroom Pizza</div>
                            <div className="itemNumbers">
                                <div className="itemQuantity">
                                    <div className="quantityButton"><button><p>-</p></button></div>
                                    <div className="quantity"><p>8</p></div>
                                    <div className="quantityButton"><button><p>+</p></button></div>
                                </div>
                                <div className="itemPrice">
                                    <p>$6.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cartItem">
                        <div className="itemImage">
                            <img src="images/mushroompizza.png"></img>
                        </div>
                        <div className="itemInfo">
                            <div className="itemName">Mushroom Pizza</div>
                            <div className="itemNumbers">
                                <div className="itemQuantity">
                                    <div className="quantityButton"><button><p>-</p></button></div>
                                    <div className="quantity"><p>2</p></div>
                                    <div className="quantityButton"><button><p>+</p></button></div>
                                </div>
                                <div className="itemPrice">
                                    <p>$6.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cartItem">
                        <div className="itemImage">
                            <img src="images/mushroompizza.png"></img>
                        </div>
                        <div className="itemInfo">
                            <div className="itemName">Mushroom Pizza</div>
                            <div className="itemNumbers">
                                <div className="itemQuantity">
                                    <div className="quantityButton"><button><p>-</p></button></div>
                                    <div className="quantity"><p>2</p></div>
                                    <div className="quantityButton"><button><p>+</p></button></div>
                                </div>
                                <div className="itemPrice">
                                    <p>$6.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cartItem">
                        <div className="itemImage">
                            <img src="images/mushroompizza.png"></img>
                        </div>
                        <div className="itemInfo">
                            <div className="itemName">Mushroom Pizza</div>
                            <div className="itemNumbers">
                                <div className="itemQuantity">
                                    <div className="quantityButton"><button><p>-</p></button></div>
                                    <div className="quantity"><p>2</p></div>
                                    <div className="quantityButton"><button><p>+</p></button></div>
                                </div>
                                <div className="itemPrice">
                                    <p>$6.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cartBill">
                    <div className="Billinner">
                    <div className="row">
                        <div id="data">Food</div>
                        <div id="data">$ 6.00</div>
                    </div>
                    <div className="row">
                        <div id="data">Delivery</div>
                        <div id="data">$ 1.00</div>
                    </div>
                    <div className="row">
                    <div id="data">Taxes</div>
                    <div id="data">$ 0.50</div>
                    </div>
                    <div className="row">
                        <div id="data">Delivery</div>
                        <div id="data">$ 1.00</div>
                    </div>
                    
                    <div className="total row">
                        <div id="data">Total</div>
                        <div id="data">$ 7.00</div>
                    </div>
                
                    <div className=" row">
                    <div className="Button">
                    Checkout
                    </div>
                       
                    </div>
                    </div>
                    

                    
                
                </div>
            </div>

        </div>
     );
}
 
export default CartComponent;