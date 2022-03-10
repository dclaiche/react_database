import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import TH from '../../components/TH';


//Question: If i want to pass multiple useStates to multiple rows how can I do that and get the data intact when it gets changed


function EditMembership({entityToEdit}) {
    const headers = ['membership_player_id', 'premium_status', 'next_payment']
    const entities = entityToEdit
    const [premium_status, setTimestamp] = useState(entityToEdit['premium_status']);
    const [next_payment, setPlayers_player_id] = useState(entityToEdit['next_payment']);
    const history = useHistory();

    const edit = async () => {
        const mem_id = entities['membership_player_id']
        const attributes = {premium_status, next_payment};
        const response = await fetch(`/messages/${mem_id}`, {
            method: 'PUT',
            body: JSON.stringify(attributes),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
            alert("Successfully edited the membership");
        } else {
            alert(`Failed to edit membership, status code = ${response.status}`);
        }
        history.push(`/membership`);
    };
    
    return (
        <>
        <table>
              <tbody>
                    <tr>
                    {headers.map((akey) => <TH akey={akey}/>)}
                    </tr>
                    <tr>
                    <td> {entities['membership_player_id']}</td>
                    <td><input placeholder={premium_status} type="number" value={premium_status} onChange={e => setTimestamp(e.target.value)} /></td>
                    <td><input placeholder={next_payment} type="date" value={next_payment} onChange={e => setPlayers_player_id(e.target.value)} /></td>
                    </tr>
                    <tr>
                    <button onClick={edit}>Submit</button>
                    </tr>
                </tbody>       
            </table>
        </>
    )
}


export default EditMembership;