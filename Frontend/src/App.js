import Footer from "./Pages/Components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>      
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
