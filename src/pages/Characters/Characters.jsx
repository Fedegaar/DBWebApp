import React from 'react'

const Characters = ({personajes}) => {
  return (
    <div>
        {personajes.map((p) => (
            <h3 key={p.id}>{p.name}</h3>
        ))}
    </div>
  )
}

export default Characters