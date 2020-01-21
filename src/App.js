import React from 'react';
import './App.css';
import './Components/Home/Home.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Components/Home/Navbar';
import Footer from './Components/Home/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import FirePrevention from './Components/Fire Prevention/FirePrevention';
import Contacts from './Components/Contacts/Contacts';
import Events from './Components/Social Events/Events';
import NotFound from './Components/NotFound';
import EventSchedule from './Components/Social Events/EventSchedule';
import OurWork from './Components/Social Events/OurWork';


function App() {
  return (
    <Router>
      <div className="App container-fluid" style={{ margin: '0', padding: '0' }}>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/About' component={About} />
          <Route path='/FirePrevention' component={FirePrevention} />
          <Route path='/Events' component={Events} />
          <Route path='/Contacts' component={Contacts} />
          <Route path='/EventSchedule' component={EventSchedule} />
          <Route path='/ourwork' component={OurWork} /> 
          <Route path='*' component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
