import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import EditEntity from './pages/EditEntity';
import Homepage from './pages/Homepage';
import Players from './pages/Players';
import Games from './pages/Games';
import Messages from './pages/Messages';
import Membership from './pages/Membership';

function App() {
  const [entityToEdit, setEntityToEdit] = useState([]);
  const [entityToLoad, setEntityToLoad] = useState([]);
  return (
    <div className="App">
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>
      <header className="App-header">
      <Router>  
          <div className="App-header">
          <Route path="/" exact>
            <Homepage/>
          </Route>
          <Route path="/players">
            <Players/>
          </Route>
          <Route path="/games">
            <Games/>
          </Route>
          <Route path="/messages">
            <Messages/>
          </Route>
          <Route path="/membership">
            <Membership/>
          </Route>
          <Route path="/edit">
            <EditEntity/>
          </Route>
          </div> 
        </Router>
      </header>
    </div>
  );
}

export default App;
