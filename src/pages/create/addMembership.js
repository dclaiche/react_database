import React, { useState } from 'react';
import TH from '../../components/TH'
import { useHistory, Link} from 'react-router-dom';

function AddMembership () {
    const headers = ['membership_player_id', 'premium_status', 'next_payment']
    const [membership_player_id, setMembership_player_id] = useState('');
    const [premium_status, setPremium_status] = useState('');
    const [next_payment, setNext_payment] = useState('');
    const history = useHistory();

    const add = async () => {
        const attributes = {membership_player_id, premium_status, next_payment};
        const response = await fetch(`/memberships`, {
            method: 'POST',
            body: JSON.stringify(attributes),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
            alert("Successfully added the membership");
        } else {
            alert(`Failed to add membership, status code = ${response.status}`);
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
                    <td><input type="number" value={membership_player_id} onChange={e => setMembership_player_id(e.target.value)}/></td>
                    <td><input type="number" value={premium_status} onChange={e => setPremium_status(e.target.value)}/></td>
                    <td><input type="date" value={next_payment} onChange={e => setNext_payment(e.target.value)}/></td>
                    </tr>
                <tr>
                <button onClick={add}>Add Membership</button>
                </tr>
                </tbody>       
            </table>
      </>
  )
}


export default AddMembership;