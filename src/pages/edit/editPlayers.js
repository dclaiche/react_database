import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import TH from '../../components/TH';


//Question: If i want to pass multiple useStates to multiple rows how can I do that and get the data intact when it gets changed


function EditPlayers({entityToEdit}) {
    const headers = ['player_id', 'email', 'password', 'games', 'wins', 'losses']
    const entities = entityToEdit
    const [email, setEmail] = useState(entityToEdit['email']);
    const [password, setPassword] = useState(entityToEdit['password']);
    const [games, setGames] = useState(entityToEdit['games']);
    const [wins, setWins] = useState(entityToEdit['wins']);
    const [losses, setLosses] = useState(entityToEdit['losses']);
    const history = useHistory();

    const edit = async () => {
        const player_id = entities['player_id']
        const attributes = {player_id, email, password, games, wins, losses};
        const response = await fetch(`/players/${player_id}`, {
            method: 'PUT',
            body: JSON.stringify(attributes),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
            alert("Successfully edited the player");
        } else {
            alert(`Failed to edit player, status code = ${response.status}`);
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
                    <td> {entities['player_id']}</td>
                    <td><input placeholder={entities['email']} type="text" value={email} onChange={e => setEmail(e.target.value)} /></td>
                    <td><input placeholder={entities['password']} type="date" value={password} onChange={e => setPassword(e.target.value)} /></td>
                    <td><input placeholder={entities['games']} type="number" value={games} onChange={e => setGames(e.target.value)} /></td>
                    <td><input placeholder={entities['wins']} type="number" value={wins} onChange={e => setWins(e.target.value)}/></td>
                    <td><input placeholder={entities['losses']} type="number" value={losses} onChange={e => setLosses(e.target.value)} /></td>
                    </tr>
                    <tr>
                    <button onClick={edit}>Submit</button>
                    </tr>
                </tbody>       
            </table>
        </>
    )
}


export default EditPlayers;