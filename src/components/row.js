import React from 'react';
import { MdAllInbox, MdDelete } from "react-icons/md";
import TD from './TD';

function Row({entities, onDelete, onEdit}) {
    const values = Object.values(entities)
    return (
        <>
            <tr>
              {values.map((attribute) => <TD attribute={attribute}/>)}
              <td><MdAllInbox onClick={ () => onEdit(entities)}/></td>
              <td><MdDelete onClick={ () => onDelete(entities)}/></td>
              </tr>
        </>
    )
}

export default Row;