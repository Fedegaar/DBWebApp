import React from 'react'
import Contador from '../../components/Contador/Contador'
import Characters from '../Characters/Characters'


const Home = () => {
  return (
    <div>
      <h1>Bienvenidos</h1>
      <Contador/>
      <Characters/>
    </div>
  )
}

export default Home