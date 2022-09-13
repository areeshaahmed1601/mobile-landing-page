import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/inc/Navbar';
import Footer from './components/inc/Footer';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  return (
    <Router>

    
    <>
    <Navbar/>
    <Switch>

    </Switch>
    <Route exact path="/">
    <Home/>
    </Route>
      <Route path='/about'>
      <About/>
      </Route>
    <Route path='/contact'>
    <Contact/>
    </Route>
    <Switch/>
    <Footer/>
     </>

     </Router>
  );
}

export default App;
