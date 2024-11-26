import { Component } from "react";

class Notification extends Component{
    render(){
        return(
            <>
            <div>    
            <h2 >Notifications</h2>
            <p>{this.props.name} has {this.props.type} your post</p>
             </div>
             </>
        )
    }
}
export default Notification;