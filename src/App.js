import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import EditEntity from './pages/EditEntity';
import Homepage from './pages/Homepage';
import Overview from './pages/Overview';

function App() {
  const [entityToEdit, setEntityToEdit] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
      <Router>  
          <div className="App-header">
          <Route path="/" exact>
            <Homepage setEntityToEdit={setEntityToEdit}/>
          </Route>
          <Route path="/overview">
            <Overview/>
          </Route>
          <Route path="/edit">
            <EditEntity editExercise={entityToEdit}/>
          </Route>
          </div> 
        </Router>
      </header>
    </div>
  );
}

export default App;
