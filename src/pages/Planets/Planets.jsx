import React, { useEffect } from 'react'
import { getAllPlanets } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { setPlanets } from '../../store/slices/planetsSlice';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';

const Planets = () => {

    const dispatch = useDispatch();
    const planetas = useSelector(state => state.planets.list);
    const links = useSelector (state => state.planets.links)

    const handlePageChange = (url) => {
        if (!url) return;
        getAllPlanets(url).then(data => {
            dispatch(setPlanets({ items: data.items, links: data.links }));
            //console.log('Data:', data.items)
        });
      };


    useEffect(() => {
        getAllPlanets().then(data => {
        //console.log('Planetas: ',data.items)
        dispatch(setPlanets({items: data.items, links: data.links}));
        console.log("asd", planetas )
        });
    }, [dispatch]);


    return (
        <div>
            <h1>Planetas de Dragon Ball</h1>
            {planetas.map(p =>
                <Card 
                    key={p.id}
                    id={p.id}
                    image={p.image}
                    name={p.name}
                    description={p.description}                   
                />
            )}
            <Link to="/home">Volver al inicio</Link>
            <button disabled={!links.previous} onClick={() => handlePageChange(links.previous)}>Previous</button>
            <button disabled={!links.next} onClick={() => handlePageChange(links.next)}>Next</button>
        </div>
    )
}

export default Planets