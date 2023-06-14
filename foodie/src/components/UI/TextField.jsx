import React from 'react'
import { ErrorMessage, useField } from 'formik'
import classes from './TextField.module.css'



const TextField = ({label,...props}) => {

    const [field,meta] = useField(props);


  return (
    <div className={classes.control}>
        <label htmlFor={field.name}>{label}</label>
        <input className={` ${meta.touched && meta.error && classes['invalid-input']} `}  {...field} {...props}  autoComplete='off'/>
        <ErrorMessage component="div" className= {classes.error}name={field.name}/>
    </div>
  )
}

export default TextField