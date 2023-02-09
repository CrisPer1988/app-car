import axios from 'axios'
import React from 'react'


const Card = ({ car, deleteCarById, setUpdateInfo }) => {

  const handleDelete = () => deleteCarById(car.id)

  const handleUpdate = () =>{
    setUpdateInfo(car)
  }

  return (
    <article className='container__card'>
      <h1 className='brand__car'>{car.brand}</h1>
      <h2 className='car__datails'>{car.model}</h2>
      <section className='list__car-container'>
        <ul>
          <li className='list__car'><span>Color: </span>{car.color}</li>
          <li className='list__car'><span>Year: </span>{car.year}</li>
          <li className='list__car'><span>Price: </span>${car.price}</li>
          <h3>#{car.id}</h3>
        </ul>
      </section>
      <button className='btn__seccion' onClick={handleDelete}>Delete card</button>
      <button className='btn__seccion' onClick={handleUpdate}>Update this car</button>
    </article>
  )
}

export default Card