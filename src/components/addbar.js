import React, { useState } from 'react';
import InputBox from './inputbox';
import TH from './TH'

function AddBar ({entities, headers, page}) {
    let attributes = {}
    headers.map((head) => attributes[head])
    console.log(attributes)
   


    // const add = async () => {
    //     const response = await fetch(`/${page}`, {
    //         method: 'PUT',
    //         body: JSON.stringify(attributes),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     });
    //     if(response.status === 200){
    //         alert("Successfully edited the exercise");
    //     } else {
    //         alert(`Failed to add exercise, status code = ${response.status}`);
    //     }
    //     history.push(`/${page}`);
    // };

  return (
      <>
            <table>
              <tbody>
                  <form>
                    <tr>
                    {headers.map((akey) => <TH akey={akey}/>)}
                    </tr>
                    {headers.map((akey) => <InputBox akey={akey} entities={entities} />)}
                </form>
                </tbody>       
            </table>
      </>
  )
}


export default AddBar;