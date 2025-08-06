import React from 'react'

const Card = ({image, name, race, maxKi, affiliation}) => {
  return (
    <div>
        <img src={image} alt="image" />
        <h3>{name}</h3>
        {race && <p>Raza: {race}</p>}
        {maxKi && <p>Ki Máximo: {maxKi}</p>}
        {affiliation && <p>Afiliación: {affiliation}</p>}
    </div>
  )
}

export default Card