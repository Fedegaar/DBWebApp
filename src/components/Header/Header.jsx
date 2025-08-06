import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {

  return (
    <div>
      <Link to="/home">Home</Link> 
      <Link to="/characters">Personajes</Link>
      <Link to="/planets">Planetas</Link>
    </div>
  )
}

export default Header