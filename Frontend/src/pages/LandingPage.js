import LPBanner from "./Components/LPBanner";
import LPOurServices from "./Components/LPOurServices";
import LPStatistics from "./Components/LPStatistics";
import LPSubscribe from "./Components/LPSubscribe";

const LandingPage = () => {
    return ( 
        <div>
            <LPBanner/>
            <LPOurServices/>
            <LPStatistics/>
            <LPSubscribe/>
        </div>
     );
}
 
export default LandingPage;