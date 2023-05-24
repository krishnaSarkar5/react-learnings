import React from 'react'
import LoginImage from '../assests/login.webp'
import LoginForm from '../components/LoginForm'

const LoginPage = (props) => {
  return (
    
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-7'>
                    <img className='image-fluid w-100' src={LoginImage} alt=''/>
                </div>
                <div className='col-md-5'>
                    <LoginForm setIsLoggedIn={props.setIsLoggedIn}/>
                </div>
            </div>
        </div>
    
  )
}

export default LoginPage