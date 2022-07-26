import React, { useState } from 'react'

const Formulario = () => {{

}   // HOOKS STATE
    const [fruit, setFruit] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [error1, setError1] = useState('');
    const [lista, setLista] = useState([]);
    
    //METHOD ADD
    const agregar = (e) => {
        e.preventDefault();
        if(!fruit.trim()){
            setError('El campo Fruit se encuentra vacio');
            return
        }else{
            setError('');
        }
        if(!description.trim()){
            setError1('El campo Description se encuentra vacio');
            return
        }else{
            setError1('');
        }
        e.target.reset();
        setFruit('');
        setDescription('');

        setLista([
            ...lista,
            {fruta: fruit, descripcion: description}
        ])
    }
    return(
        <div>
            <h2>Formulario de Frutas🍉🍎🍏</h2>
            <form onSubmit={ agregar }>
                <input
                    type="text"
                    placeholder='Ingresar Fruta' 
                    className='form-control mb-2'
                    onChange={ (e) => setFruit(e.target.value) }
                />
                <p>
                    {
                        error
                    }
                </p>
                <input
                    type="text"
                    placeholder='Ingresar Descripcion'
                    className='form-control mb-2'
                    onChange={ (e) => setDescription(e.target.value)}
                />
                <p>
                    {
                        error1
                    }
                </p>
                <button className="btn btn-primary btn-block" type='submit'>Agregar</button>
            </form>
            <br />
            <br />
            <ul>
                {
                    lista.map((element,index) => {
                        return <li key={index}>  <b>Fruta:</b> {element.fruta} <b>Descripcion:</b> {element.descripcion}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default Formulario