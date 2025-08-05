import React, { useEffect, useState } from 'react'
import { getAllCharacters } from '../../services/api'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setCharacters } from '../../store/slices/charactersSlice';
import Card from '../../components/Card/Card';



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
          <Card 
              key={p.id}
              id={p.id}
              image={p.image}
              name={p.name}
              race={p.race}
              maxKi={p.maxKi}
              affiliation={p.affiliation}
          />
        )}
      <Link to="/home">Volver a Inicio</Link>
    </div>
  )
}

export default Characters