import React,{Component} from 'react';
import Try from './Function_compo';

// const abc = {
//     brand: "Ford",
//     model: "Mustang",
//     color: "red",
//     year: 1964
//   };
// class Try1 extends Component{
//     render(){
    
//     return <h2>{abc.brand}</h2>
// }
// }


class Class_compo extends React.Component {
    constructor() {
    super();
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
      };
    }
    render() {
      return (
        <div>
          <h1>My {this.state.brand}</h1>
          <p>
            It is a {this.state.color}
            {this.state.model}
            from {this.state.year}.
          </p>
        </div>
      );
    }
  }
  export default Class_compo;