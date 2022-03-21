import Navbar from "./Components/Navbar";
import Board from "./Components/Board";
import Offer from "./Components/Offer";
import LoginPageComponent from "./Components/LoginPageComponent";
import LPBanner from "./Components/LPBanner";
import LPOurServices from "./Components/LPOurServices";
import LPStatistics from "./Components/LPStatistics";
import LPSubscribe from "./Components/LPSubscribe";

const LandingPage = () => {
    return ( 
        <div className="loginbody">
            <LoginPageComponent/>
        </div>
    )
}
            
// import LPBanner from "./Components/LPBanner";
// import LPOurServices from "./Components/LPOurServices";
// import LPStatistics from "./Components/LPStatistics";
// import LPSubscribe from "./Components/LPSubscribe";

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