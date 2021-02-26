import React, { useState } from "react";


const MyHooks =  () =>{
const state = useState();

 const [count , SetCount] = useState(0);

const IncNum = () => {
   SetCount(count + 1);
}

    return(
        <>
        <h1>{count}</h1>
        <button onClick= {IncNum}>Click me</button>
        </>
    )

}
export default MyHooks;