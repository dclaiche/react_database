import React from 'react';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';


function PremiumSearch ({setToSearch}) {
    const history = useHistory();

    // Search by player ID
    const onSearch = async () => {
        const response = await fetch(`/premiumplayers`, {
            method: 'GET'
        });
        setToSearch(response.json());
        history.push('/search');

}
    return (
        <>
        <div>
        <button onClick={onSearch}>Search Premium Members</button>
        </div>
        </>
    )
}

export default PremiumSearch;