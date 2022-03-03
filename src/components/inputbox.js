import React, {useState} from 'react';


function InputBox ({akey, entities}) {
    const [attribute, setAttribute] = useState();
    return (
        <>
        <td><input type="text" placeholder={akey} value={attribute} onChange={e => setAttribute(e.target.value)}/></td>
        </>
    )
}

export default InputBox;