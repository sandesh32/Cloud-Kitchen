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
                    <p id="domain">Food</p>
                    <p id="price">$ 6.00</p>
                    <p id="domain">Delivery</p>
                    <p id="price">$ 1.00</p>
                    <p id="domain">Taxes</p>
                    <p id="price">$ 0.50</p>
                    <p id="domain">Discount</p>
                    <p id="price">$ 0.50</p>
                    <p id="total">Total</p>
                    <p id="price">$ 7.00</p>
                </div>
            </div>

        </div>
     );
}
 
export default CartComponent;