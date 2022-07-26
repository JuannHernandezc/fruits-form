import React, {useState} from 'react'

const Contador = () => {
    const [count, setCount] = useState(0);
    const aumentar = () => {
        setCount(count + 1); 
    }
    const disminuir = () => {
        setCount(count - 1);
    }
    return(
        <div>
            <h2>Contador</h2>
            <h3>Nuestro numero aumento:  {count} </h3>
            <p>
                {
                    count >= 2 ? 'Es mayor a dos' : 'Es menor a dos' 
                }
            </p>
            <button onClick={ () => aumentar() } >Aumentar</button>
            <button onClick={ () => disminuir() }>Disminuir</button>
        </div>
    )
}
export default Contador