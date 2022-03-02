import React from 'react';
import { useHistory} from 'react-router-dom';
import NavB from '../components/navbar';
import Table from '../components/table';
import {useState, useEffect} from 'react';



function Overview({entity}) {
    const history = useHistory();
    const [entities, setEntities] = useState([]);
    
    useEffect(() => {
        console.log(entity)
        loadEntities();
    }, [entities]);

    
    //To be used as placeholder for user schema via mongoose on the backend
    const loadEntities = () => {
        //To be used as placeholder for user schema via mongoose on the backend
        setEntities(entity);
    }
    

    const onEdit = entities => {
        // setEntityToEdit(entities)
        history.push('/edit');
    }

    const onLoad = entities => {
        // setEntityToLoad(entities)
        history.push('/overview');
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
        <NavB entities={entities} onLoad={onLoad}></NavB>
        {/* <Table entities={entities} onDelete={onDelete} onEdit={onEdit}></Table> */}

        </>
    )
}


export default Overview;