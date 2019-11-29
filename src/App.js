import React from 'react';
import './App.css';
import './Components/Home/Home.module.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Components/Home/Navbar';
import Footer from './Components/Home/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import FirePrevention from './Components/Fire Prevention/FirePrevention';
import Contacts from './Components/Contacts/Contacts';
import Events from './Components/Social Events/Events';


function App() {
  return (
    <BrowserRouter>
      <div className="App container-fluid" style={{ margin: '0', padding: '0' }}>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/FirePrevention' component={FirePrevention} />
        <Route path='/Events' component={Events} />
        <Route path='/Contacts' component={Contacts} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
