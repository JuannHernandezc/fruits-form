import React, {useState} from 'react'

const Listas = () => {
    const initialState = [
        {id: 1, texto: 'Tarea 1'},
        {id: 2, texto: 'Tarea 2'},
        {id: 3, texto: 'Tarea 3'},
    ];
    const [lista, setLista] = useState(initialState); 
    // Metodo para agregar los elementos dentro de una array de objetos 
    // En el setLista Utilizamos el spread operator para iterar y sumar elementos al array
    const agregar = () =>{
        setLista([
            ...lista,
            {id: 4, texto: 'Tarea 4'}
        ])
    }
    return(
        <>
        <h2>Listas</h2>
        {
            // Siempre se debe pasar un key es un identificador unico del elemento en este caso su posicion 
            lista.map((item, index) => {
                return <h4 key={ index }> { item.texto }</h4>
            })
        }
        <button onClick={ () => agregar() }> Agregar </button>
        </>
    )
}
export default Listas