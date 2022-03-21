import Tile from "./Tile";
import React, { useState } from 'react';
import axios from "axios";

class Board extends React.Component {
    state = {
        products: [],
    };

    componentDidMount = () => {
        this.getProducts();
    };

    Board() {

    };

    getProducts = () => {
        axios.get("http://localhost:5000/products")
            .then((response) => {
                const data = response.data;
                this.setState({ products: data });
            })
            .catch(() => {
                console.log("Error in fetching data");
            })
    };

    displayProducts = (products) => {
        return products.map((product, index) => {
            return (
                <Tile index={index} product = {product} />
            )

        });
    }

    render() {
        return (
            <div className="board">
                <h1 className="board_title"> This weeks most selling!!</h1>
                <div className="content">
                    {this.displayProducts(this.state.products)}
                </div>
            </div>
        );
    }


}

export default Board;