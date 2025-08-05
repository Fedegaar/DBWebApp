import React from 'react'

const Card = ({image, name, race, maxKi, affiliation}) => {
  return (
    <div>
        <img src={image} alt="image" />
        <h3>{name}</h3>
        <h5>Raza: {race}</h5>
        <h5>KI maximo: {maxKi}</h5>
        <h5>Afiliacion: {affiliation}</h5>
    </div>
  )
}

export default Card