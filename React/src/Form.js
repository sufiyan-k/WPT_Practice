
import {useEffect, useState} from "react";

function Increament(){
    let a=10;
    let [count,setCount]=useState(0);
    //use effect
    useEffect(()=>{
        console.log("in use effect");
    },[count==5])

    return(
        <div>
            <h1>This is use effect example </h1>
            <h3>Value of count is {count}</h3>
            <button onClick={()=>setCount((c)=>c+1)}>Add</button>
        </div>

    );
}
export default Increament;