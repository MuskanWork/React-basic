import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const name = "Muskan";
// const date = new Date().toLocaleDateString();
// const heading = {
//   color : 'red',
//   textTransform : 'capitalize'
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  /* <>
<h1 style = {heading}>{`hello i am using template literals ${name} from ${date}`}</h1>
<h1 contentEditable = "true"> Hello Everyone!!! {name} </h1>
<h2 className = "abc"> I am using ReactJs</h2>
<h1>My name is {name} {3 *3} {date}</h1>
</> */
,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
