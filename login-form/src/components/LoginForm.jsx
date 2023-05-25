import { Form, Formik } from 'formik'
import React, { useContext } from 'react'
import TextField from './TextField'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import {frontEndPaths} from '../routes/RoutePath'
import {authenticate} from '../services/AuthenticationService'
import { useNavigate } from 'react-router-dom'
import {LoginContext} from '../App'






const LoginForm = () => {

    const navigate = useNavigate();

    const {setIsLoggedIn} = useContext(LoginContext);

    const validation = Yup.object({
        email:Yup.string().email("Enter a valid email id").required("Email is required"),
        password:Yup.string().required("Password is required")
    })



    const initialValues = {
        email:"",
        password:""
    }


    const authenticateUser=(values)=>{
      const response =  authenticate(values.email,values.password)

      console.log(response)
        if(response.status){
            setIsLoggedIn(1);
            navigate(frontEndPaths.dashboard)
            console.log("login success")
        }else{
            setIsLoggedIn(3);
        }

    }

    const handelSubmit = (values)=>{
        console.log(values);
        authenticateUser(values);
       
    }

  return (
    <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={handelSubmit}
    
    >
        {formik=>(
            <div>
                <h1 className='my-4 font-weight-bold-display-4'>Login</h1>
                <Form>
                    <TextField label="Email" type="email" name="email" />
                    <TextField label="Password" type="password" name="password" />
                    <button className='btn btn-primary mt-3' type='submit' disabled={!formik.isValid || !formik.dirty}>Login</button>
                </Form>
                <Link to={frontEndPaths.signup}>Don't have an account</Link>
            </div>
        )}

    </Formik>
  )
}

export default LoginForm