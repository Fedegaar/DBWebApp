import React, { useEffect, useState } from 'react'
import { getAllCharacters } from '../../services/api'
import { Link } from 'react-router-dom'


const Characters = (data) => {

  const [personajes, setPersonajes] = useState([])

useEffect(() => {
  const fetchData = async () => {
    const data = await getAllCharacters();
    console.log(data);
    setPersonajes(data);
  };
  fetchData();
}, []);
  return (
    <div>
      <h1>Personajes de Dragon Ball</h1>
        {personajes.map(p =>

            <li key={p.id}>{p.name}</li>

        )}
      <Link to="/home">Volver a Inicio</Link>
    </div>
  )
}

export default Characters