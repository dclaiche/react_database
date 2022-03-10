import React, { useState } from 'react';
import TH from '../../components/TH'
import { useHistory, Link} from 'react-router-dom';

function AddMessages () {
    const headers = ['chat_message', 'timestamp', 'players_player_id', 'games_game_id']
    const [chat_message, setChat_message] = useState('');
    const [timestamp, setTimestamp] = useState('');
    const [players_player_id, setPlayers_player_id] = useState('');
    const [games_game_id, setGames_game_id] = useState('');
    const history = useHistory();

    const add = async () => {
        const attributes = {chat_message, timestamp, players_player_id, games_game_id};
        const response = await fetch(`/messages`, {
            method: 'POST',
            body: JSON.stringify(attributes),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
            alert("Successfully added the message");
        } else {
            alert(`Failed to add message, status code = ${response.status}`);
        }
        history.push(`/messages`);
    };
    
  return (
      <>
            <table>
              <tbody>
                    <tr>
                    {headers.map((akey) => <TH akey={akey}/>)}
                    </tr>
                    <tr>
                    <td><input type="text" value={chat_message} onChange={e => setChat_message(e.target.value)}/></td>
                    <td><input type="date" value={timestamp} onChange={e => setTimestamp(e.target.value)}/></td>
                    <td><input type="number" value={players_player_id} onChange={e => setPlayers_player_id(e.target.value)}/></td>
                    <td><input type="number" value={games_game_id} onChange={e => setGames_game_id(e.target.value)}/></td>
                    </tr>
                <tr>
                <button onClick={add}>Add Message</button>
                </tr>
                </tbody>       
            </table>
      </>
  )
}


export default AddMessages;