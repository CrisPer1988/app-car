import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'


const FormCar = ({createNewCars, updateInfo, updateCarById}) => {

   const { register, handleSubmit, reset } = useForm()

   // const submitTraditional = e => {
    // e.preventDefault()
    // createNewCar({
    //   brand: e.target.brand.value,
    //   model: e.target.model.value,
    //   color: e.target.color.value,
    //   year: e.target.year.value,
    //   price: e.target.price.value
    // });
    // e.target.brand.value = ''
    // e.target.model.value = ''
    // e.target.color.value = ''
    // e.target.year.value = ''
    // e.target.price.value = ''

  // }
  useEffect(() => {
    if(updateInfo)
    reset(updateInfo)
  }, [updateInfo])
  

   const submit = data => {
    if(updateInfo){
    updateCarById(updateInfo.id, data)

    }else{ 
    createNewCars(data)
    }
    reset({
        brand: '',
        model: '',
        color: '',
        year: '',
        price: ''
      })
   }

  return (
    <>
    <form className='container__form img__form' onSubmit={handleSubmit(submit)}>
        <div>
            <label className='input__name' htmlFor="brand">Brand: </label>
            <input className='form__input' {...register("brand")} id='brand' type="text" placeholder='Enter a car brand' />
        </div>
        <div>
            <label className='input__name' htmlFor="model">Model:</label>
            <input className='form__input' {...register("model")} id='model' type="text" placeholder='Enter a car model' />
        </div>
        <div>
            <label className='input__name' htmlFor="color">Color: </label>
            <input className='form__input' {...register("color")} id='color' type="text" placeholder='Enter a car color' />
        </div>
        <div>
            <label className='input__name' htmlFor="year">Year: </label>
            <input className='form__input' {...register("year")} id='year' type="text" placeholder='Enter a car year' />
        </div>
        <div>
            <label className='input__name' htmlFor="price">Price: </label>
            <input className='form__input' {...register("price")} id='price' type="text" placeholder='Enter a car price' />
        </div>
        <button className='btn__create'>{updateInfo ? "Update car" : "Create car" }</button>
    </form>
    
    </>
  )
}

export default FormCar