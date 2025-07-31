import React, { useState } from 'react'


const Contador = () => {

    const [contador, setContador] = useState(0)
  return (
    <div>
        <h1>Contador</h1>
        <h4>Contador : {contador}</h4>
        <button onClick={()=> setContador(contador+1)}>+</button>
        <button onClick={()=> setContador(contador-1)}>-</button>

    </div>
  )
}

export default Contador