import React from 'react';
import { useHistory, Link} from 'react-router-dom';
import NavB from '../components/navbar';
import Table from '../components/table';
import {useState, useEffect} from 'react';



function Membership({setEntityToEdit}) {
    const history = useHistory();
    const [entities, setEntities] = useState([0]);
    const headers = ['membership_player_id', 'premium_status', 'next_payment']
    
    useEffect(() => {
        loadEntities();
    }, [entities]);
    
    // To be used as placeholder for user schema via mongoose on the backend
    const loadEntities = async () => {
        //To be used as placeholder for user schema via mongoose on the backend
        const response = await fetch('/memberships', {method: 'GET'});
        const entities = await response.json();
        setEntities(entities);
    }

    const onEdit = entities => {
        setEntityToEdit(entities)
        history.push('/editmembership');
    }

    const onDelete = async entities => {
        const id = entities["membership_player_id"] 
        const response = await fetch(`/memberships/${id}`, { method: 'DELETE'})
        if (response.status === 200) {
            loadEntities();
            } else {
            console.error(`Failed to delete membership with id = ${id}, status code = ${response.status}`)
            }
    }

    return (
        <>
        <NavB entities={entities}></NavB>
        <Table entities={entities} onDelete={onDelete} onEdit={onEdit} headers={headers}></Table>
        <Link to="/createmembership">Add Membership</Link>
        </>
    )
}


export default Membership;