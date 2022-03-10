import React from 'react';
import { MdAllInbox, MdDelete } from "react-icons/md";


function EditRow({entities}) {
    const values = Object.values(entities)
    return (
        <>
            <tr>
              {values.map((attribute) => <InputBox attribute={attribute}/>)}
              </tr>
        </>
    )
}

export default EditRow;