import React from 'react';
import { MdOutlineDeleteForever, MdEditNote } from "react-icons/md";
import TD from './TD';

function Row({attributes, onDelete, onEdit}) {
    return (
        <>
            <tr>
              {attributes.map((attribute, i) => <TD attribute={attribute} key={i} />)}
              <td><MdEditNote onClick={ () => onEdit(entity)}/></td>
              <td><MdOutlineDeleteForever onClick={ () => onDelete(entity._id)}/></td>
              </tr>
        </>
    )
}

export default Row;