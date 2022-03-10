import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import Homepage from './pages/Homepage';
import Players from './pages/Players';
import Games from './pages/Games';
import Messages from './pages/Messages';
import Membership from './pages/Membership';
import AddGames from './pages/create/addGames';
import AddMembership from './pages/create/addMembership';
import AddMessages from './pages/create/addMembership';
import AddPlayer from './pages/create/addPlayers';
import SearchResults from './pages/SearchResults';
import EditPlayers from './pages/edit/editPlayers';

function App() {
  const [entityToEdit, setEntityToEdit] = useState([]);
  const [entityToAdd, setEntityToAdd] = useState([]);
  const [tosearch, setToSearch] = useState([]);
  return (
    <div className="App">
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossOrigin="anonymous"
/>
      <header className="App-header">
      <Router>  
          <div className="App-header">
          <Route path="/" exact>
            <Homepage/>
          </Route>
          <Route path="/players">
            <Players setToSearch={setToSearch} setEntityToEdit={setEntityToEdit}/>
          </Route>
          <Route path="/games">
            <Games setToSearch={setToSearch} setEntityToEdit={setEntityToEdit}/>
          </Route>
          <Route path="/messages">
            <Messages setToSearch={setToSearch} setEntityToEdit={setEntityToEdit}/>
          </Route>
          <Route path="/membership">
            <Membership setToSearch={setToSearch} setEntityToEdit={setEntityToEdit}/>
          </Route>
          <Route path="/creategames">
            <AddGames/>
          </Route>
          <Route path="/createmembership">
            <AddMembership/>
          </Route>
          <Route path="/createmessage">
            <AddMessages/>
          </Route>
          <Route path="/createplayer">
            <AddPlayer/>
          </Route>
          <Route path="/search">
            <SearchResults tosearch={tosearch}/>
          </Route>
          <Route path="/edit">
            <EditPlayers entityToEdit={entityToEdit}/>
          </Route>
          </div> 
        </Router>
      </header>
    </div>
  );
}
//HOST=hidden-thicket-04891.herokuapp.com "http://flip1.engr.oregonstate.edu:5341"

export default App;
