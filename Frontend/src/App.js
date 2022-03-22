import Cart from "./pages/Cart";
import LandingPage from "./pages/LandingPage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./pages/Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import RegisterPage from "./pages/RegisterPage";
// import MainPage from "./pages/MainPage";
import LoginPage from "./pages/Components/LoginPage";
import HomePage from "./pages/Components/HomePage";

function App() {
  const url = "http://localhost:5000/";
  const get_food_url = "http://localhost:5000/products";
  const foodTypes = ["Snacks"];
  const [details, setDetails] = useState("");

  const [foodDetails, setFoodDetails] = useState([]);

  const getFoodData = async() => {
    const products = await axios.get(get_food_url);
    console.log(products.data);
    setFoodDetails(products.data);
  }

  useEffect(() => getFoodData());
  const getData = async () => {
    const message = await axios.get(url);
    console.log(message);
    setDetails(message.data);
  };

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
        <Route path="/home" element={<HomePage fooddetails={foodDetails}/>}/> 
        <Route path="/cart" element={<Cart/>}/> 
        {/* <Route path="/registerpage" element={<RegisterPage/>}/>
          <Route path="/mainpage" element={<MainPage/>}/> */}
        
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
