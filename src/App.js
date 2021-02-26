import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Nav from './component/Nav';
import Carousel from './component/Carousel';
import Function_compo from './component/Function_compo';
import Class_compo from './component/Class_compo';
import MyForm from './component/MyForm';
import Loginform  from "./component/Loginform";
import NavBar from './Routing/NavBar';
import Home from './Routing/Home';
import About from './Routing/About';
import Post from './Routing/Post';
import NotFound from './Routing/NotFound';
import  MyHooks  from "./component/MyHooks";
import Hook1 from './component/Hook1';

function App() {
  return (
    <>
     <BrowserRouter>
     {/* <MyHooks /> */}
     <Hook1 / >
     {/* <Nav /> */}
    {/* <Carousel /> */}
    {/* <Function_compo fname="Muskan"/> */}
    {/* <Class_compo word="something"/> */}
    {/* <Loginform/> */}
    {/* <MyForm /> */}
    {/* <NavBar/>
    <Switch>
    <Route path="/about" component = {About} />
    <Route path="/post:year?/:month?" component = {Post} />
    <Route path="/NotFound" component = {NotFound} />
    <Redirect to="/NotFound" />
    <Route path="/" component = {Home} />
    
    </Switch> */}
    </BrowserRouter>
    
    </>
  );
}

export default App;
