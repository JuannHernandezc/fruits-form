import React, { useState } from 'react'

const Hooks = () => {
    const [text, setText] = useState('Hola mi nombre es Nicolas');
    const eventoClick = () => {
        setText('Hola mi nombre es Juliana');
    }
    return (
        <>
         <hr />
         <h2>{ text }</h2>
         <button onClick={ () =>  eventoClick() }>Click</button>
        </>
    )
}
export default Hooks