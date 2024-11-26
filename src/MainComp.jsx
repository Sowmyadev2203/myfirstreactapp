import { Component } from "react";
import "./main.css"

const products=[{
    productName:"mobile",
    productPrice:55000,
    productAvailability:true
},
{productName:"laptop",
    productPrice:55000,
    productAvailability: false
}
];

const obj={
    productName:"mobile",
    productPrice:55000,
    productAvailability:true
}

class Main extends Component{
    render(){
        return(
            <>
            {/* <h1 style={obj.productAvailability?style.available:style.unavailable}>{obj.productName}{obj.productPrice}</h1> */}


            <div className="mainbox">
                <div className={products[0].productAvailability?"available":"unavailable"}>
                    <h1>{products[0].productName}</h1>
                   <h1> {products[0].productPrice}</h1>
                </div>
                <div className={products[1].productAvailability?"available":"unavailable"}>
               <h1> {products[1].productName}</h1>
               <h1>{products[1].productPrice}</h1>
                </div>

            </div>
            </>
        )
    }
}
const style={
    available:{color:"green"},
    unavailable:{color:"red"}
}

export default Main;