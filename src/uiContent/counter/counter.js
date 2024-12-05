import React, {Component} from "react";
import "./counter.css"

class Countercomp extends Component{

    constructor(){

        super()
        this.state={counter:2}

    }
    handleEvent=()=>{
        this.setState({counter:this.state.counter+1})
    }

    handleEvent1=()=>{
        this.setState({counter:this.state.counter+2})
    }

    handleEvent2=()=>{
        this.setState({counter:this.state.counter-1})
    }

    handleEvent3=()=>{
        this.setState({counter:this.state.counter-2})
    }
    render(){

        return(<>
        <h1 style={{color:"white"}}>{this.state.counter}</h1>
        
        <div className="div1">
        
        <button onClick={this.handleEvent}>+1</button>
        <button onClick={this.handleEvent1}>+2</button>
        <button onClick={this.handleEvent2}>-1</button>
        <button onClick={this.handleEvent3}>-2</button>

        </div></>
        )
    }
}

export default Countercomp;