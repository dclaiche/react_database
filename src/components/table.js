import React from 'react';
import Row from './row';
import TH from './TH';

function Table({entities, onDelete, onEdit, headers}) {
    return (
        <>
         <div>
        </div>
            <table>
              <tbody>
                    <tr>
                    {headers.map((akey) => <TH akey={akey}/>)}
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                    {entities.map((entities, i) => <Row entities={entities} onDelete={onDelete} onEdit={onEdit} key={i}/>)}   
                </tbody>       
            </table>
        </>
    )
}

export default Table;