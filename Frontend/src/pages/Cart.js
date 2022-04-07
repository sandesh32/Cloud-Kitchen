import CartComponent from './Components/CartComponent';
import Navbar from './Components/Navbar';

const Cart = () => {
    if(!localStorage.token || localStorage.usertype!=="customer"){
        window.location.href = `/logincustomer`;
        return;
        }
    return ( 
        <div>
            <Navbar/>
            <div className="cart">
            <CartComponent/>
            </div>
        </div>
        
     );
}
 
export default Cart;