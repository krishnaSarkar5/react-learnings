import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import TextField from './TextField'
import * as Yup from 'yup';

const Signup = (props) => {


    const [submitSuccess,setSubmitSuccess] = useState(false);

    const validation = Yup.object(
        {
            firstName:Yup.string().max(15,"First name should not be more than 15 characters").required("First Name is required"),
            lastName:Yup.string().max(15,"Last name should not be more than 15 characters").required("Last Name is required"),
            email:Yup.string().email().required("Email is required"),
            phone:Yup.string().min(10,"Phone should have 10 characters").max(10,"Phone should have 10 characters").required("Phone is required"),
            password:Yup.string().min(6,"Password should have minimum 6 characters").required("Password is required"),
            confirmPassword:Yup.string().oneOf([Yup.ref("password"),null],"Password does not match").required("Confirm Password is required")
        }
    )


    const handleSubmit= (values)=>{
        console.log(values);
        props.setSubmitSuccess(true);
    }

    const handleReset= (values)=>{
        console.log(values);
        props.setSubmitSuccess(false);
    }


    const initialValues = {
        firstName : "",
        lastName : "",
        email : "",
        phone : "",
        password : "",
        confirmPassword : ""
    }



  return (
    <Formik
    
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={handleSubmit}
        onReset={handleReset}
        
    >
       {formik=>(
        
        <div>
            
           <Form>
                <h1 className='my-4 font-weight-bold-display-4'>Signup</h1>
                <TextField label="First Name" type="text" name="firstName"/>
                <TextField label="Last Name" type="text" name="lastName"/>
                <TextField label="Email" type="email" name="email"/>
                <TextField label="Phone" type="text" name="phone"/>
                <TextField label="Password" type="password" name="password"/>
                <TextField label="Confrim Password" type="password" name="confirmPassword"/>
                <button className='btn btn-primary mt-3 ml-2' type='submit' >Register</button>
                <button className='btn btn-danger mt-3 ml-10' type='reset'>Reset</button>
            </Form>
           
        </div>
       )}


    </Formik>
  )
}

export default Signup