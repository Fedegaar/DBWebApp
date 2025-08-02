import React, { useEffect, useState } from 'react'
import { getAllCharacters } from '../../services/api'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setCharacters } from '../../store/slices/charactersSlice';



const Characters = (data) => {

  //const [personajes, setPersonajes] = useState([])
  const dispatch = useDispatch();
  const personajes = useSelector(state => state.characters.list);


useEffect(() => {
  getAllCharacters().then(data => {
    dispatch(setCharacters(data));
  });
}, [dispatch]);
  return (
    <div>
      <h1>Personajes de Dragon Ball</h1>
        {personajes.map(p =>
            <li key={p.id}>
              <Link to={`/characters/${p.id}`}>{p.name}</Link>
            </li>
        )}
      <Link to="/home">Volver a Inicio</Link>
    </div>
  )
}

export default Characters