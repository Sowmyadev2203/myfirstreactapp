import React, { Component } from "react";

class Even extends Component {
    constructor() {
        super();
        this.state = { even: "", odd: "", total: "" };
        this.handlechange = this.handlechange.bind(this); // Bind the method
    }

    handlechange(event) {
        const number = event.target.value;
        if (!isNaN(number) && number !== "") { // Check if input is a number
            if (number % 2 === 0) {
                this.setState({ even: "even number", odd: "" }); // Clear odd if even
            } else {
                this.setState({ odd: "odd number", even: "" }); // Clear even if odd
            }
        } else  {
            this.setState({ total:"not a number"}); // Reset if input is not a number
        }
        

    }

    handsubmit = (e) => {
        e.preventDefault(); // Correct casing
        this.setState({ total: this.state.even || this.state.odd });
    }

    render() {
        return (
            <div>
                <h1>Even(or)Odd</h1>
                <form onSubmit={this.handsubmit}>
                    <input type="text" name="number" onChange={this.handlechange} />
                    <input type="submit" />
                </form>
                <h1>{this.state.total}</h1>
            </div>
        );
    }
}

export default Even;