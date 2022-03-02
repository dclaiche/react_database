import React from 'react';
import { MdAllInbox, MdDelete } from "react-icons/md";
import TD from './TD';

function Row({attributes, onDelete, onEdit}) {
    return (
        <>
            <tr>
              {attributes.map((attribute, i) => <TD attribute={attribute} key={i} />)}
              <td><MdAllInbox onClick={ () => onEdit(attributes)}/></td>
              <td><MdDelete onClick={ () => onDelete(attributes)}/></td>
              </tr>
        </>
    )
}

export default Row;