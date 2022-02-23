const CartComponent = () => {
    return ( 
        <div className = "cartBody">
            <hr className="dividerLine"></hr>
            <div className="cartHeading">Cart</div>
            <div className="cartItems">
                <div className="itemImage"></div>
                <div className="itemInfo">
                    <div className="itemName"></div>
                    <div className="itemNumbers">
                        <div className="itemQuantity"></div>
                        <div className="itemPrice"></div>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default CartComponent;