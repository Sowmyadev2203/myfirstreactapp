import React from "react";
import ChildTwo from "../child2/child2";

function Childone(props){
    return(
        <>
        <h1>{props.c1}</h1>
       <ChildTwo two={props.c2}/>
        </>
    )
}
export default Childone;