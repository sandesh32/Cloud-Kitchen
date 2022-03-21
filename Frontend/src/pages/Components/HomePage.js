// import { useState } from "react";
import Navbar from "./Navbar";
import Board from "./Board";
import Offer from "./Offer";
import Footer from "./Footer";

const HomePage =(props)=>{
    const fooddetails=props.fooddetails;
    
    return (
        <div>
            <Navbar/>
            <Offer/>
            {fooddetails.map((fooddetail)=> (
                <Board fooddetail={fooddetail} key={fooddetail.id}/>
            )
        )};
           
            <Footer/>
            
        </div>
    );
}

export default HomePage;