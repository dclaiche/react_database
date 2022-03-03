import React from 'react';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';


function Filter ({setToSearch}) {
    const [search_query, setSearch_Query] = useState ([]);
    const history = useHistory();

    // Search by player ID
    const onSearch = async () => {
        const response = await fetch(`/players`, {
            method: 'GET',
            body: JSON.stringify(search_query),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        setToSearch(response.json());
        history.push('/search');

}
    return (
        <>
        <div>
        <input type="number" value={search_query} onChange={e => setSearch_Query(e.target.value)}></input>
        <button onClick={onSearch}></button>
        </div>
        </>
    )
}

export default Filter;