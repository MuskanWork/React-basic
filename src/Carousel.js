import React, { Component } from 'react';
import './App.css';

const image = {
    height : "500px",
    alignItems : "center"
}

class Carousel extends Component{
    render(){
        return(
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div class="carousel-item active">
      <img style={image} src="https://images.unsplash.com/photo-1613750590291-4c5fb85f6e71?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="d-block w-100"/>
    </div>
    <div className="carousel-item">
      <img style={image} src="https://images.unsplash.com/photo-1613750590291-4c5fb85f6e71?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="d-block w-100"/>
    </div>
    <div className="carousel-item">
      <img style={image} src="https://images.unsplash.com/photo-1613750590291-4c5fb85f6e71?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="d-block w-100"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        );
 }
        
}
export default Carousel;