// import Footer from "./pages/Components/Footer";
import Cart from './pages/Cart';
import LandingPage from "./pages/LandingPage";
import axios from "axios";
import React, {useState} from 'react';
import LoginPage from "./pages/Components/LoginPage";
import HomePage from "./pages/Components/HomePage";
// import Footer from "./pages/Components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// import {useState} from 'react';

// import LandingPage from "./Pages/LandingPage";
// import axios from "axios";

function App() {
  var url = "http://localhost:5000/";
  const [details, setDetails] = useState('');
  const getData = async()=>{
  const message = await axios.get(url);
  setDetails(message.data);
  };
  const [fooddetails, setFooddetails] = useState([
    {
      title: "Todays Special",
      food: [{tag: ["tag1", "tag2"],name: "Golden Pizza",price: "5$"},
              {tag: ["tag1", "tag2"],name: "Golden Pizza",price: "5$"},
              {tag: ["tag1", "tag2"],name: "Golden Pizza",price: "5$"},
            ],
    },
    {
      title: "Special Nonveg",
      food: [{tag: ["tag1", "tag2"],name: "Golden Pizza",price: "5$"},
              {tag: ["tag1", "tag2"],name: "Golden Pizza",price: "5$"},
              {tag: ["tag1", "tag2"],name: "Golden Pizza",price: "5$"},
            ],
    },
    {
      title: "Veg Special",
      food: [{tag: ["tag1", "tag2"],name: "Golden Pizza",price: "5$"},
              {tag: ["tag1", "tag2"],name: "Golden Pizza",price: "5$"},
              {tag: ["tag1", "tag2"],name: "Golden Pizza",price: "5$"},
            ],
  },
    {
      title: "Most Selling",
      food: [{tag: ["tag1", "tag2"],name: "Golden Pizza",price: "5$"},
              {tag: ["tag1", "tag2"],name: "Golden Pizza",price: "5$"},
              {tag: ["tag1", "tag2"],name: "Golden Pizza",price: "5$"},
            ],
  },
  ]);
  return (
    <>
    <Router>
      <Routes>
        <Route path="/check" element={
            <div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <button onClick={getData}>Get Data</button>
              <br />
              <br />
              {details}
            </div>
        }></Route>
        <Route path="/" element={<LandingPage/>}/> 
        <Route path="/login" element={<LoginPage/>}/> 
        <Route path="/home" element={<HomePage fooddetails={fooddetails}/>}/> 
        <Route path="/cart" element={<Cart/>}/> 
        
      </Routes>
    </Router>
    
    </>
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
