import Cart from "./Pages/Cart";
import LandingPage from "./Pages/LandingPage";
import axios from "axios";
import React, { useState } from "react";
import Footer from "./Pages/Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage";
import MainPage from "./Pages/MainPage";

function App() {
  var url = "http://localhost:5000/";
  const [details, setDetails] = useState("");
  const getData = async () => {
    const message = await axios.get(url);
    console.log(message);
    setDetails(message.data);
  };
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/check"
            element={
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
            }
          ></Route>
          <Route path="/" element={<LandingPage />} />
          <Route path="/registerpage" element={<RegisterPage/>}/>
          <Route path="/mainpage" element={<MainPage/>}/>
        </Routes>
      </Router>
      {/* <div>
        <Cart />
      </div> */}
    </>
  );
}

export default App;
