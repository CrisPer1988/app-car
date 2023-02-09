import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import FormCar from './components/FormCar'

function App() {

  const [cars, setCars] = useState()
  const [updateInfo, setUpdateInfo] = useState()

  const getAllCars = () => {
    const url = 'https://cars-crud.academlo.tech/cars/'

    axios.get(url)
    .then(res => setCars(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllCars()
  }, [])

  const createNewCars = data =>{
    const url = `https://cars-crud.academlo.tech/cars/`

    axios.post(url, data)
    .then(res => {
      getAllCars()
      console.log(res.data)})
    .catch(err => console.log(err))
    }

  console.log(cars);
  
  const deleteCarById = id => {
    const url = `https://cars-crud.academlo.tech/cars/${id}/`

    axios.delete(url)
    .then(res => {
      getAllCars()
      console.log(res.data)
    })
    .catch(err => console.log(err))
  }

  const updateCarById = (id, data) =>{
    const url = `https://cars-crud.academlo.tech/cars/${id}/`
    axios.put(url, data)
    .then(res => { 
     console.log(res.data) 
    getAllCars()
    setUpdateInfo()
  })
    .catch(err => console.log(err))
   }
  

  return (
    <div className="App">
      
      <FormCar
      createNewCars={createNewCars}
      updateInfo={updateInfo}
      updateCarById={updateCarById}
       />
       <div className='card__container'>
      {
        cars?.map(car => (
          <Card       
          key={car.id}
          car={car}
          deleteCarById={deleteCarById}
          setUpdateInfo={setUpdateInfo}
          />
       
        ))
      }
      </div>
    </div>
  )
}

export default App
