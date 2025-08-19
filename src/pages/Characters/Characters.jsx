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

  const handlePageChange = (url) => {
     if (!url) return;
      getAllCharacters(url).then(data => {
     dispatch(setCharacters({ items: data.items, links: data.links }));
     //console.log('Data:', data.items)
    });
  };


  useEffect(() => {
    getAllCharacters().then(data => {
     //console.log('Personajes: ',data.items)
     dispatch(setCharacters({items: data.items, links: data.links}));
     //console.log("asd", personajes )
    });
  }, [dispatch]);


  return (
    <div>
      <h1>Personajes de Dragon Ball</h1>
        {personajes?.map(p =>
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
      <button disabled={!links.previous} onClick={() => handlePageChange(links.previous)}>Previous</button>
      <button disabled={!links.next} onClick={() => handlePageChange(links.next)}>Next</button>
      <Link to="/home">Volver a Inicio</Link>
    </div>
  )
}

export default Characters