import React from 'react';
import { useHistory } from 'react-router-dom';
import NavB from '../components/navbar';
import {useState, useEffect} from 'react';

function Homepage({setEntityToEdit}) {
    const history = useHistory();
    const [entities, setEntities] = useState([]);


function loadEntities() {
    //To be used as placeholder for user schema via mongoose on the backend
    const players = {player_id:1, email:'user@gmail.com', password:'144c9defac04969c7bfad8efaa8ea194', games:3, wins:1, losses:2};
    const entities = {players:players};
    setEntities(entities);
}

useEffect(() => {
    loadEntities();
}, []);

const onEdit = entities => {
    setEntityToEdit(entities)
    history.push('/Edit');
}

return (
    <>
    <NavB entities={entities} onEdit={onEdit}></NavB>
    </>
)
}




export default Homepage;