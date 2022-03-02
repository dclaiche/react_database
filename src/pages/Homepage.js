import React from 'react';
import { useHistory } from 'react-router-dom';
import NavB from '../components/navbar';
import {useState, useEffect} from 'react';

function Homepage({setEntityToLoad}){
    const history = useHistory();
    const [entities, setEntities] = useState([69]);

    useEffect(() => {
        loadEntities();
    }, []);

    const loadEntities = () => {
        //To be used as placeholder for user schema via mongoose on the backend
        const players = {player_id:1, email:'user@gmail.com', password:'144c9defac04969c7bfad8efaa8ea194', games:3, wins:1, losses:2};
        const entities = {players:players};
        setEntities(entities);
    }

    const onLoad = entities => {
        setEntityToLoad(entities)
        history.push('/overview');
    }

    return (
        <>
            <NavB entities={entities} onLoad={onLoad}></NavB>
        </>
    )
}




export default Homepage;