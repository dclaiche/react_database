import React from 'react';
import { useHistory, Link} from 'react-router-dom';
import NavB from '../components/navbar';
import Table from '../components/table';
import {useState, useEffect} from 'react';



function PlayersHasGames() {
    const history = useHistory();
    const [entities, setEntities] = useState([0]);
    
    useEffect(() => {
        loadEntities();
    }, [entities]);
    
    // To be used as placeholder for user schema via mongoose on the backend
    const loadEntities = async () => {
        //To be used as placeholder for user schema via mongoose on the backend
        setEntities(entityToLoad);
    }

    const onEdit = entities => {
        // setEntityToEdit(entities)
        history.push('/edit');
    }

    const onDelete = async pk => {
        const response = await fetch(`/delete`, { method: 'DELETE' });
        if (response.status === 204) {
            setEntities(entities.filter(e => e.pk !== pk));
        } else {
        console.error(`Failed to delete exercise with id = ${pk}, status code = ${response.status}`)
        }
    }

    return (
        <>
        <NavB entities={entities}></NavB>
        <Table entities={entities} onDelete={onDelete} onEdit={onEdit}></Table>
        <Link to="/addplayershasgames">Add Player</Link>
        </>
    )
}


export default PlayersHasGames;