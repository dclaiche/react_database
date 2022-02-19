import React from 'react';
import { MdOutlineDeleteForever } from "react-icons/md";
import Row from './row';
import TH from './TH';

function Table({entity, onDelete, onEdit}) {
    keys = Object.keys(entity)
    return (
        <>
         <div class="cap">
            <caption>{entity}</caption>
        </div>
            <table>
              <tbody>
                    <tr>
                    {keys.map((akey) => <TH akey={akey}/>)}
                    </tr>
                    {entity.map((attributes, i) => <Row attributes={attributes} onDelete={onDelete} onEdit={onEdit} key={i} />)}   
                </tbody>       
            </table>
        </>
    )
}

export default Table;