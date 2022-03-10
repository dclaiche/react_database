import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import TH from '../../components/TH';


//Question: If i want to pass multiple useStates to multiple rows how can I do that and get the data intact when it gets changed


function EditGame({entityToEdit}) {
    const headers = ['game_id', 'time_played', 'duration', 'player_1', 'player_2', 'winner', 'socket_id', 'active_game']
    const entities = entityToEdit
    const [time_played, setTime_played] = useState(entityToEdit['time_played']);
    const [duration, setDuration] = useState(entityToEdit['duration']);
    const [player_1, setPlayer_1] = useState(entityToEdit['player_1']);
    const [player_2, setPlayer_2] = useState(entityToEdit['player_2']);
    const [winner, setWinner] = useState(entityToEdit['winner']);
    const [socket_id, setSocket_id] = useState(entityToEdit['socket_id']);
    const [active_game, setActive_game] = useState(entityToEdit['active_game']);
    const history = useHistory();

    const edit = async () => {
        const game_id = entities['game_id']
        const attributes = {time_played, duration, player_1, player_2, winner, socket_id, active_game};
        const response = await fetch(`/games/${game_id}`, {
            method: 'PUT',
            body: JSON.stringify(attributes),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
            alert("Successfully edited the game");
        } else {
            alert(`Failed to edit game, status code = ${response.status}`);
        }
        history.push(`/games`);
    };
    
    return (
        <>
        <table>
              <tbody>
                    <tr>
                    {headers.map((akey) => <TH akey={akey}/>)}
                    </tr>
                    <tr>
                    <td> {entities['game_id']}</td>
                    <td><input placeholder={time_played} type="date" value={time_played} onChange={e => setTime_played(e.target.value)} /></td>
                    <td><input placeholder={duration} type="date" value={duration} onChange={e => setDuration(e.target.value)} /></td>
                    <td><input placeholder={player_1} type="number" value={player_1} onChange={e => setPlayer_1(e.target.value)} /></td>
                    <td><input placeholder={player_2} type="number" value={player_2} onChange={e => setPlayer_2(e.target.value)} /></td>
                    <td><input placeholder={winner} type="number" value={winner} onChange={e => setWinner(e.target.value)} /></td>
                    <td><input placeholder={socket_id} type="number" value={socket_id} onChange={e => setSocket_id(e.target.value)} /></td>
                    <td><input placeholder={active_game} type="number" value={active_game} onChange={e => setActive_game(e.target.value)} /></td>
                    </tr>
                    <tr>
                    <button onClick={edit}>Submit</button>
                    </tr>
                </tbody>       
            </table>
        </>
    )
}


export default EditGame;