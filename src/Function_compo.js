import React from 'react';

// const abc = {
//     brand: "Ford",
//     model: "Mustang",
//     color: "red",
//     year: 1964
//   };
function Function_compo(props)
{
    function abc()
    {
        alert('great job');
    }
    return (
        <>
        <h1>lets try function</h1>
        {/* <h2> welcome {abc.brand}</h2> */}
        <button onClick = {abc}>click me</button>
        </>
    );
}

export default Function_compo;