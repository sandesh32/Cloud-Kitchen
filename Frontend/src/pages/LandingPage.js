import Navbar from "./Components/Navbar";
import Board from "./Components/Board";
import Offer from "./Components/Offer";
// import LPBanner from "./Components/LPBanner";
// import LPOurServices from "./Components/LPOurServices";
// import LPStatistics from "./Components/LPStatistics";
// import LPSubscribe from "./Components/LPSubscribe";

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
    )
    }

// const LandingPage = () => {
//     return ( 
//         <div>
//             <LPBanner/>
//             <LPOurServices/>
//             <LPStatistics/>
//             <LPSubscribe/>
//         </div>
//      );
// }
 
export default LandingPage;