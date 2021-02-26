import React, { useState } from "react";

const Hook1 = () =>{
const state = useState();


let newTime = new Date().toLocalTimeString();
// const [] = useState();

// const getTime = () => {

// }
return(
    <>
    {/* <h1>{getTime}</h1> */}
    {/* <button>Get Time</button> */}
    <h1>{newTime}</h1>
    </>
)

}
export default Hook1;