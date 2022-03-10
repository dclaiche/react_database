import React, { useState } from 'react';
import TH from '../../components/TH'
import { useHistory, Link} from 'react-router-dom';

function AddPlayer () {
    const headers = ['email', 'password', 'games', 'wins', 'losses']
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [games, setGames] = useState('');
    const [wins, setWins] = useState('');
    const [losses, setLosses] = useState('');
    const history = useHistory();

    const add = async () => {
        const attributes = {email, password, games, wins, losses};
        const response = await fetch(`/players`, {
            method: 'POST',
            body: JSON.stringify(attributes),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
            alert("Successfully added the player!");
        } else {
            alert(`Failed to add player, status code = ${response.status}`);
        }
        history.push(`/players`);
    };
    
  return (
      <>
            <table>
              <tbody>
                    <tr>
                    {headers.map((akey) => <TH akey={akey}/>)}
                    </tr>
                    <tr>
                    <td><input type="text" value={email} onChange={e => setEmail(e.target.value)}/></td>
                    <td><input value={password} onChange={e => setPassword(e.target.value)}/></td>
                    <td><input type="number" value={games} onChange={e => setGames(e.target.value)}/></td>
                    <td><input type="number" value={wins} onChange={e => setWins(e.target.value)}/></td>
                    <td><input type="number" value={losses} onChange={e => setLosses(e.target.value)}/></td>
                    </tr>
                <tr>
                <button onClick={add}>Add Player</button>
                </tr>
                </tbody>       
            </table>
      </>
  )
}


export default AddPlayer;