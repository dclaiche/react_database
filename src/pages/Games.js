import React from 'react';
import { useHistory, Link} from 'react-router-dom';
import NavB from '../components/navbar';
import Table from '../components/table';
import {useState, useEffect} from 'react';


function Games({setEntityToEdit}) {
    const history = useHistory();
    const [entities, setEntities] = useState([0]);
    const headers = ['game_id', 'time_played', 'duration', 'player_1', 'player_2', 'winner', 'socket_id', 'active_game']
    
    useEffect(() => {
        loadEntities();
    }, [entities]);
    
    // To be used as placeholder for user schema via mongoose on the backend
    const loadEntities = async () => {
        //To be used as placeholder for user schema via mongoose on the backend
        const response = await fetch('/games', {method: 'GET'});
        const entities = await response.json();
        setEntities(entities);
    }

    const onEdit = entities => {
        setEntityToEdit(entities)
        history.push('/editgame');
    }

    const onDelete = async entities => {
        const id = entities["game_id"] 
        const response = await fetch(`/games/${id}`, { method: 'DELETE'})
        if (response.status === 200) {
            loadEntities();
            } else {
            console.error(`Failed to delete game with id = ${id}, status code = ${response.status}`)
            }
    }

    return (
        <>
        <NavB entities={entities}></NavB>
        <Table entities={entities} onDelete={onDelete} onEdit={onEdit} headers={headers}></Table>
        <Link to="/creategames">Add Game</Link>
        </>
    )
}


export default Games;