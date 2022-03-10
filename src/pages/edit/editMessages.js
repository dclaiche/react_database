import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import TH from '../../components/TH';


//Question: If i want to pass multiple useStates to multiple rows how can I do that and get the data intact when it gets changed


function EditMessages({entityToEdit}) {
    const headers = ['chat_message_id', 'chat_message', 'timestamp', 'players_player_id', 'games_game_id']
    const entities = entityToEdit
    const [chat_message, setChat_message] = useState(entityToEdit['chat_message']);
    const [timestamp, setTimestamp] = useState(entityToEdit['timestamp']);
    const [players_player_id, setPlayers_player_id] = useState(entityToEdit['players_player_id']);
    const [games_game_id, setGames_game_id] = useState(entityToEdit['games_game_id']);
    const history = useHistory();

    const edit = async () => {
        const msg_id = entities['chat_message_id']
        const attributes = {chat_message, timestamp, players_player_id, games_game_id};
        const response = await fetch(`/messages/${msg_id}`, {
            method: 'PUT',
            body: JSON.stringify(attributes),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
            alert("Successfully edited the message");
        } else {
            alert(`Failed to edit message, status code = ${response.status}`);
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
                    <td> {entities['chat_message_id']}</td>
                    <td><input placeholder={chat_message} type="text" value={chat_message} onChange={e => setChat_message(e.target.value)} /></td>
                    <td><input placeholder={timestamp} type="date" value={timestamp} onChange={e => setTimestamp(e.target.value)} /></td>
                    <td><input placeholder={players_player_id} type="number" value={players_player_id} onChange={e => setPlayers_player_id(e.target.value)} /></td>
                    <td><input placeholder={games_game_id} type="number" value={games_game_id} onChange={e => setGames_game_id(e.target.value)}/></td>
                    </tr>
                    <tr>
                    <button onClick={edit}>Submit</button>
                    </tr>
                </tbody>       
            </table>
        </>
    )
}


export default EditMessages;