import React from 'react';
import Row from './row';
import TH from './TH';

function Table({entities, onDelete, onEdit}) {
    const keys = Object.keys(entities)
    return (
        <>
         <div class="cap">
        </div>
            <table>
              <tbody>
                    <tr>
                    {/* {keys.map((akey) => <TH akey={akey}/>)} */}
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                    {/* {entities.map((attributes, i) => <Row attributes={attributes} onDelete={onDelete} onEdit={onEdit} key={i} />)}    */}
                </tbody>       
            </table>
        </>
    )
}

export default Table;