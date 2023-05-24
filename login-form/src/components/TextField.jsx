import React from 'react'
import { ErrorMessage, useField } from 'formik'



const TextField = ({label,...props}) => {

    const [field,meta] = useField(props);


  return (
    <div className='mt-3 mb-1'>
        <label htmlFor={field.label}>{label}</label>
        <input className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'} `}  {...field} {...props}  autoComplete='off'/>
        <ErrorMessage component="div" className= "error"name={field.name}/>
    </div>
  )
}

export default TextField