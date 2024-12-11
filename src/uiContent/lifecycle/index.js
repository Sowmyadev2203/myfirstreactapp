import React,{useState} from "react";

export default function FuncLifeCycle(){
    const [text,setText] = useState(1)

    const handleButton1=()=>{
        setText(text+1)
    }
    const handleButton2=()=>{
        setText(text+2)
    }
    const handleButton3=()=>{
        setText(text-2)
    }
    const handleButton4=()=>{
        setText(text-1)
    }
    
    
    return(
        <div  style={{
                border:"4px solid orangered",
                padding:"20px",
                height:"40%",
                width:"40%",
                backgroundColor:"black",
                color:"white",
               
                
        }}>
       <h5>Counter using functional component</h5>
        <h1>{text}</h1>
        <button onClick={handleButton1}>+1</button>
        <button onClick={handleButton2}>+2</button>
        <button onClick={handleButton3}>-2</button>
        <button onClick={handleButton4}>-1</button>
        </div>
    )
}
