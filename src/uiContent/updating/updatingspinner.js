import React, { Component } from "react";
import axios from "axios";
import Loader from "../utilities/loadspinner";
import Cards from "../bootstrap/card";

class UpdatingSpinner extends Component {
    constructor() {
        super();
        this.state = { count: 1, product: null };
    }

    componentDidMount() {
        this.fetchProduct(this.state.count);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            this.fetchProduct(this.state.count);
        }
    }

    fetchProduct = (id) => {
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                this.setState({ product: res.data });
            });
    };

    handleButtonClick = (id) => {
        this.setState({ count: id });
    };

    render() {
        const { count, product } = this.state;

        return (
            <div>
                <div>
                    <h1>Product {count}</h1>
                    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                        {[1, 2, 3, 4, 5, 6, 7, 8 , 9 , 10].map((num) => (
                            <button
                                key={num}
                                onClick={() => this.handleButtonClick(num)}
                                style={{
                                    padding: "10px",
                                    backgroundColor: count === num ? "orangered" : "#f0f0f0",
                                    color: count === num ? "#fff" : "#000",
                                    border: "1px solid #ddd",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                {num}
                            </button>
                        ))}
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                    {!product ? (
                        <Loader />
                    ) : (
                        <Cards
                            img={product.image}
                            title={product.title}
                            desc={product.description}
                            info={product.category}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default UpdatingSpinner;