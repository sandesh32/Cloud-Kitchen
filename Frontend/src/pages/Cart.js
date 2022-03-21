import CartComponent from './Components/CartComponent';
import Navbar from './Components/Navbar';

const Cart = () => {
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