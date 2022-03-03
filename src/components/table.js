import React from 'react';
import Row from './row';
import TH from './TH';

function Table({entities, onDelete, onEdit}) {
    const keys = Object.keys(entities[0])
    return (
        <>
         <div>
        </div>
            <table>
              <tbody>
                    <tr>
                    {keys.map((akey) => <TH akey={akey}/>)}
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                    <Row entities={entities} onDelete={onDelete} onEdit={onEdit}/>   
                </tbody>       
            </table>
        </>
    )
}

export default Table;