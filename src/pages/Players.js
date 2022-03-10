import React from 'react';
import { Link, useHistory} from 'react-router-dom';
import NavB from '../components/navbar';
import Table from '../components/table';
import {useState, useEffect} from 'react';


function Players({setToSearch, setEntityToEdit}) {
    const history = useHistory();
    const [entities, setEntities] = useState([0]);
    const [getplayers, setGetPlayers] = useState();
    const [getwinners, setGetWinners] = useState([0]);
    const [toggle, setToggle] = useState(false);
    const headers = ['player_id', 'email', 'password', 'games', 'wins', 'losses']
    const header2 = ['player_id', 'game_id']

    useEffect(() => {
        loadEntities()
    }, []);


    // To be used as placeholder for user schema via mongoose on the backend
    const loadEntities = async () => {
        const response = await fetch('/players', {method: 'GET'});
        const entities = await response.json();
        setEntities(entities);
    }

    const onDelete = async entities => {
        console.log(entities["player_id"])
        const id = entities["player_id"] 
        const response = await fetch(`/players/${id}`, { method: 'DELETE'})
        .then (history.push('/players'))
        .catch (error => {
        console.error(`Failed to delete player with id = ${id}, status code = ${error}`)
        })
    }

    const onEdit = entities => {
        setEntityToEdit(entities)
        history.push('/edit');
    }

    const onGamesPlayed = async () => {
        const response = await fetch(`players/games/${getplayers}`, {method: 'GET'});
        const entities = await response.json();
        setEntities(entities)
    }

    const onPremiumSearch = async () => {
        const response = await fetch ('/players/premiumplayers', {method: 'GET'});
        const entities = await response.json();
        setEntities(entities);
    }

    const onShowWinners = async () => {
        setToggle(!toggle)
        const response = await fetch('/players/gameswon', {method: 'GET'});
        const getwinners = await response.json();
        setGetWinners(getwinners);
    }


    return (
        <>
        <NavB entities={entities}></NavB>
        <Table entities={entities} onDelete={onDelete} onEdit={onEdit} headers={headers}></Table>
        <Link to="/createplayer">Add Player</Link>
        <button onClick={onPremiumSearch}>Search Premium Members</button>
        <input type="number" placeholder="players who have X games" value={getplayers} onChange={(e => setGetPlayers(e.target.value))}/>
        <button onClick={onGamesPlayed}>Submit</button>
        <button onClick={onShowWinners}>Show Winners of Games</button>
        {toggle ? <Table entities={getwinners} headers={header2}></Table> : <div></div>}
        </>
    )
}


export default Players;