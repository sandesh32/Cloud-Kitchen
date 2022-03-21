import Navbar from "./Components/Navbar";
import Offer from "./Components/Offer";
import Board from "./Components/Board";
import Footer from "./Components/Footer";

const MainPage = () => {
    return (
        <div className="mainpage">
            <Navbar />
            <Offer />
            <Board />
            <Footer />
        </div>
    );
}
 
export default MainPage;