import React from 'react'

//Lenguaje JSX
const Variables = () => {
    const saludo = "Hola mi nombre es Nicolas"
    const img = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/245px-Cristiano_Ronaldo_2018.jpg"
    return(
        <div>
            <h2>Nicolas dice : { saludo }</h2>
            <img src={ img } alt=""/>
        </div>
    )
}
export default Variables