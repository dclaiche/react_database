import React from 'react';
import { MdAllInbox, MdDelete } from "react-icons/md";
import TD from './TD';

function Row({entities, onDelete, onEdit}) {
    let values = Object.values(entities)
    return (
        <>
            <tr>
              {entities.map((attribute, i) => <TD attribute={attribute} key={i}/>)}
              <td><MdAllInbox onClick={ () => onEdit(entities)}/></td>
              <td><MdDelete onClick={ () => onDelete(entities)}/></td>
              </tr>
        </>
    )
}

export default Row;