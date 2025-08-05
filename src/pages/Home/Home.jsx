import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <h1>Bienvenidos a la Dragon Ball Web App</h1>
      <Link to="/characters">Ver Personajes</Link>
      <Link to="/planets">Ver Planetas</Link>
    </div>
  )
}

export default Home