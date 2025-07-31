import React, { useEffect, useState } from 'react'
import { getAllCharacters } from '../../services/api'


const Characters = (data) => {

  const [personajes, setPersonajes] = [null]

  useEffect(()=> 
  getAllCharacters(),
  setPersonajes(data)
,[])
  return (
    <div>
      {personajes.map(p =>
      <ul>
          <li key={p.id}>{p.name}</li>
      </ul>
      )}
    </div>
  )
}

export default Characters