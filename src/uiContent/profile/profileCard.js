import { Component } from "react";

class Profile extends Component{
    render(){
        return(
            <div>
            <h2>Profilecard</h2>
            <p>{this.props.name} is {this.props.course} graduate,{this.props.city} as a{this.props.developer}</p>
            </div>
        )
    }
}
export default Profile;