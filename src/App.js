import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Nav from './Nav';
import Carousel from './Carousel';
import Function_compo from './Function_compo';
import Class_compo from './Class_compo';
import MyForm from './MyForm';
import Loginform  from "./Loginform";
import NavBar from './Routing/NavBar';
import Home from './Routing/Home';
import About from './Routing/About';
import Post from './Routing/Post';
import NotFound from './Routing/NotFound';

function App() {
  return (
    <>
     <BrowserRouter>
     
     {/* <Nav /> */}
    {/* <Carousel /> */}
    {/* <Function_compo fname="Muskan"/> */}
    {/* <Class_compo word="something"/> */}
    {/* <Loginform/> */}
    {/* <MyForm /> */}
    <NavBar/>
    <Switch>
    <Route path="/about" component = {About} />
    <Route path="/post:year?/:month?" component = {Post} />
    <Route path="/NotFound" component = {NotFound} />
    <Redirect to="/NotFound" />
    <Route path="/" component = {Home} />
    
    </Switch>
    </BrowserRouter>
    
    </>
  );
}

export default App;
