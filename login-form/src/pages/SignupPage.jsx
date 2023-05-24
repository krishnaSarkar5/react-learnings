import React , { useState } from 'react'
import Signup from '../components/Signup'
import signupImage from '../assests/signup.jpg'
import Alert from '../components/Alert'
import { Link } from 'react-router-dom'
import {frontEndPaths} from '../routes/RoutePath'

const SignupPage = () => {
    const [submitSuccess,setSubmitSuccess] = useState(false);
  return (
    <div className='container mt-5'>
         {submitSuccess && <Alert type="success" message="Registered Successfully"/>}
      <div className='row'>
        <div className='col-md-5'>
          <Signup setSubmitSuccess={setSubmitSuccess}/>
          <Link to={frontEndPaths.login}>Already have account</Link>
        </div>
        <div className='col-md-7'>
          <img className='img-fluid w-100 mt-10' src={signupImage} alt=""/>
        </div>
      </div>
   </div>
  )
}

export default SignupPage