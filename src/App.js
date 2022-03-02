import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import EditEntity from './pages/EditEntity';
import Homepage from './pages/Homepage';
import Overview from './pages/Overview';

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
            <Homepage setEntityToLoad={setEntityToLoad}/>
          </Route>
          <Route path="/overview">
            <Overview entity={entityToLoad}/>
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
