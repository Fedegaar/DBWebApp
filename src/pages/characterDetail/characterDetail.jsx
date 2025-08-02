import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

const CharacterDetail = () => {
  
  const { id } = useParams()
  const personajes = useSelector(state => state.characters.list) 
  const personaje = personajes.find(p => p.id.toString() === id);
  console.log(personaje)
  return (
    <div>
        <h1>Detalles del Personaje {id}</h1>
        <h2>{personaje.name}</h2>
        <h2>{personaje.race}</h2>
        <p>{personaje.description}</p>
        <img src={personaje.image} alt="fotos" width="200" height="400"/>
        <Link to="/characters">Volver a Personajes</Link>
        <Link to="/home">Volver a Inicio</Link>
    </div>
  )
}

export default CharacterDetail