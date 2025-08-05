import React, { useEffect } from 'react'
import { getAllPlanets } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { setPlanets } from '../../store/slices/planetsSlice';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';

const Planets = () => {

    const dispatch = useDispatch();
    const planetas = useSelector(state => state.planets.list);


    useEffect(() => {
        getAllPlanets().then(planetsData => {
            dispatch(setPlanets(planetsData))
            console.log('Estos son los planetas', planetsData)
        })
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
                />
            )}
            <Link to="/home">Volver al inicio</Link>
        </div>
    )
}

export default Planets