import React, { useEffect } from 'react'
import { getAllPlanets } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { setPlanets } from '../../store/slices/planetsSlice';


const Planets = () => {

    const dispatch = useDispatch();
    const planetas = useSelector(state => state.planets.list);


    useEffect(() => {
        getAllPlanets().then(data => {
            dispatch(setPlanets(data))
            console.log(planetas.items)
        })
    })
    return (
        <div>Planets</div>
    )
}

export default Planets