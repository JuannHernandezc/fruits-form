import React, { Fragment } from 'react'
const Eventos = () => {
    const eventoClick = () => {
        console.log("Me diste un click")
    }
    return(
        // <Fragment>
        //     <hr />
        //     <h2>Eventos</h2>
        //     <button onClick={ () => eventoClick() } > Click </button>
        // </Fragment>
        <>
            <hr />
            <h2>Eventos</h2>
            <button onClick={ () => eventoClick() } > Click </button>
        </>
    )
} 
export default Eventos