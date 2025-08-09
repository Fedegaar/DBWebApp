import React, { useEffect, useState } from 'react'
import { getAllCharacters } from '../../services/api'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setCharacters } from '../../store/slices/charactersSlice';
import Card from '../../components/Card/Card';



const Characters = () => {

  //const [personajes, setPersonajes] = useState([])
  const dispatch = useDispatch();
  const personajes = useSelector(state => state.characters.list);
  const links = useSelector (state => state.characters.links)


useEffect(() => {
  console.log("asd", personajesj)
  getAllCharacters().then(data => {
    console.log('Personajes: ',data)
    dispatch(setCharacters(data.items));
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
      <button disabled={!links.previous} onClick={() => setCharacters(links.previous)}>Previous</button>
      <button disabled={!links.next} onClick={() => setCharacters(links.next)}>Next</button>
      <Link to="/home">Volver a Inicio</Link>
    </div>
  )
}

export default Characters