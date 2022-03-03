import React, { useState } from 'react';
import TH from '../../components/TH'
import { useHistory, Link} from 'react-router-dom';

function AddGames () {
    const headers = ['time_played', 'duration', 'player_1', 'player_2', 'winner', 'socket_id', 'active_game']
    const [time_played, setTime_played] = useState('');
    const [duration, setDuration] = useState('');
    const [player_1, setPlayer_1] = useState('');
    const [player_2, setPlayer_2] = useState('');
    const [winner, setWinner] = useState('');
    const [socket_id, setSocket_id] = useState('');
    const [active_game, setActive_game] = useState('');
    const history = useHistory();

    // const add = async () => {
    //     const attributes = {time_played, duration, player_1, player_2, winner, socket_id, active_game};
    //     const response = await fetch(`/games`, {
    //         method: 'POST',
    //         body: JSON.stringify(attributes),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     });
    //     if(response.status === 200){
    //         alert("Successfully edited the exercise");
    //     } else {
    //         alert(`Failed to add exercise, status code = ${response.status}`);
    //     }
    //     history.push(`/games`);
    // };
    
  return (
      <>
            <table>
              <tbody>
                    <tr>
                    {headers.map((akey) => <TH akey={akey}/>)}
                    </tr>
                    <tr>
                    <td><input type="date" value={time_played} onChange={e => setTime_played(e.target.value)}/></td>
                    <td><input type="date" value={duration} onChange={e => setDuration(e.target.value)}/></td>
                    <td><input type="number" value={player_1} onChange={e => setPlayer_1(e.target.value)}/></td>
                    <td><input type="number" value={player_2} onChange={e => setPlayer_2(e.target.value)}/></td>
                    <td><input type="number" value={winner} onChange={e => setWinner(e.target.value)}/></td>
                    <td><input type="number" value={socket_id} onChange={e => setSocket_id(e.target.value)}/></td>
                    <td><input type="number" value={active_game} onChange={e => setActive_game(e.target.value)}/></td>
                    </tr>
                <tr>
                <button>Add Game</button>
                </tr>
                </tbody>       
            </table>
      </>
  )
}


export default AddGames;