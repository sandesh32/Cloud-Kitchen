import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import React, {useState} from 'react';

import LandingPage from "./Pages/LandingPage";
import axios from "axios";

function App() {
  var url = "http://localhost:5000/";
  const [details, setDetails] = useState('');
  const getData = async()=>{
    const message = await axios.get(url);
    setDetails(message.data);
  };
  return (
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

        }
        ></Route>
        <Route path="/" element={<LandingPage/>}/>      
      </Routes>
    </Router>
  );
}

export default App;
