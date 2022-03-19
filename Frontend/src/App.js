import Cart from './pages/Cart';
import LandingPage from "./pages/LandingPage";
import Footer from "./pages/Components/Footer";
import axios from "axios";
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  var url = "http://localhost:5000/";
  const [details, setDetails] = useState('');
  const getData = async()=>{
    const message = await axios.get(url);
    setDetails(message.data);
  };
  return (
    <div>
      <Cart/>
    </div>
    // <Router>
    //   <Routes>
    //     <Route path="/check" element={
    //         <div>
    //           <br />
    //           <br />
    //           <br />
    //           <br />
    //           <br />
    //           <button onClick={getData}>Get Data</button>
    //           <br />
    //           <br />
    //           {details}
    //         </div>

    //     }
    //     ></Route>
    //     <Route path="/" element={<LandingPage/>}/>      
    //   </Routes>
    //   <Footer/>
    // </Router>
  );
}

export default App;
