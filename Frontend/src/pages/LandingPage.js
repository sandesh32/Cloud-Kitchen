import Navbar from "./Components/Navbar";
import Board from "./Components/Board";
import Offer from "./Components/Offer";

const LandingPage = () => {
    return ( 
        <div className="body">

            <Navbar/>
            <Offer/>
            <Board/>
            <Board/>
            <Board/>
            <Board/>
            
        </div>
     );
}
 
export default LandingPage;