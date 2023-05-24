import { useField,ErrorMessage } from 'formik'
import React from 'react'

const TextField = ({label,...props}) => {

  const [field,meta] =  useField(props);


  return (
    <div className='mt-3 mb-1'>
        <label htmlFor={label}>{label}</label>
        <input className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'} `}  {...field} {...props}  autoComplete='off'/>
        <ErrorMessage component="div" className= "error"name={field.name}/>
    </div>
  )
}

export default TextField