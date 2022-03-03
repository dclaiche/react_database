import React from 'react';
import { Link, useHistory} from 'react-router-dom';
import NavB from '../components/navbar';
import Table from '../components/table';
import {useState, useEffect} from 'react';
import AddBar from '../components/addbar';



function Players() {
    const history = useHistory();
    const [entities, setEntities] = useState([0]);
    const headers = ['player_id', 'email', 'password', 'games', 'wins', 'losses']
    const page = 'players'

    useEffect(() => {
        loadEntities();
    }, [entities]);
    
    // To be used as placeholder for user schema via mongoose on the backend
    const loadEntities = async () => {
        const response = await fetch('/players', {method: 'GET'});
        const entities = await response.json();
        setEntities(entities);
    }

    const onEdit = entities => {
        // setEntityToEdit(entities)
        history.push('/edit');
    }

    const onDelete = async pk => {
        const response = await fetch(`/players`, { method: 'DELETE' });
        if (response.status === 204) {
            setEntities(entities.filter(e => e.pk !== pk));
        } else {
        console.error(`Failed to delete exercise with id = ${pk}, status code = ${response.status}`)
        }
    }

    return (
        <>
        <NavB entities={entities}></NavB>
        <Table entities={entities} onDelete={onDelete} onEdit={onEdit} headers={headers}></Table>
        <Link to="/createplayer">Add Player</Link>
        </>
    )
}


export default Players;