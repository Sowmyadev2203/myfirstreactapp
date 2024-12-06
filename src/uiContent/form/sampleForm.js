import React from "react";

class SampleForm extends React.Component{
    constructor(){
        super()
        this.state={text:this.formSubmission}
    }
    formSubmission = (e)=>{
        e.preventDefault();
        this.setState({text:e.target.id1.value})
    }
    render(){
        return(
            <>
            <form onSubmit={this.formSubmission}>
                <input type="text" id="id1"/>
                <input type="submit"/> 
            </form> 
            <h1>{this.state.text}</h1>
            </>
        )
    }
}
export default SampleForm;