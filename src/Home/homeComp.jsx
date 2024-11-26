import React from "react";
import { Component } from "react";
import Notification from "../uiContent/notifications/notificationCard";
import Products from "../uiContent/products/products";
import Profile from "../uiContent/profile/profileCard";

class HomeComponent extends Component{
    render(){
        return(
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

            <Notification name="sowmya" type="liked" />
            <Notification name="sowmya" type="saved" />
            <Notification name="sowmya" type="commented" />
            <Profile name="sowmya" course="Btech" city="Hyd" developer="front-end"/>
            <Products>
                <h2>Mobiles</h2>
                <p>Samsumg</p>
                <p>Oppo</p>
            </Products>

            </div>
        )
    }
}
export default HomeComponent;