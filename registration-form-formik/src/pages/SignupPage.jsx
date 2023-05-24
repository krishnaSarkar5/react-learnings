import React , { useState } from 'react'
import Signup from '../component/Signup'
import signupImage from '../assests/signup.jpg'
import Alert from '../component/Alert'

const SignupPage = () => {
    const [submitSuccess,setSubmitSuccess] = useState(false);
  return (
    <div className='container mt-5'>
         {submitSuccess && <Alert type="success" message="Registered Successfully"/>}
      <div className='row'>
        <div className='col-md-5'>
          <Signup setSubmitSuccess={setSubmitSuccess}/>
        </div>
        <div className='col-md-7'>
          <img className='img-fluid w-100 mt-10' src={signupImage} alt=""/>
        </div>
      </div>
   </div>
  )
}

export default SignupPage