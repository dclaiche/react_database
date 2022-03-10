import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import TH from '../components/TH';
import EditRow from '../components/editrow';

//Question: If i want to pass multiple useStates to multiple rows how can I do that and get the data intact when it gets changed


function EditEntity({entityToEdit}) {
    const headers = entityToEdit[1]
    const entities = entityToEdit[0]
    const [attribute, setAttribute] = useState([]);
    
    return (
        <>
        <table>
              <tbody>
                    <tr>
                    {headers.map((akey) => <TH akey={akey}/>)}
                    </tr>
                    {entities.map((entities, i) => <EditRow entities={entities} key={i}/>)}   
                </tbody>       
            </table>
        </>
    )
}


export default EditEntity;