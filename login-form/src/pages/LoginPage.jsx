import React ,{useContext} from 'react'
import LoginImage from '../assests/login.webp'
import LoginForm from '../components/LoginForm'
import Alert from '../components/Alert'
import {LoginContext} from '../App'
import { appMessage } from '../constants/Message'

const LoginPage = () => {

    const {isLoggedIn,setIsLoggedIn} = useContext(LoginContext);

    setTimeout(() => {

        if(isLoggedIn===2 || isLoggedIn===3){
            setIsLoggedIn(0);
        }}, 3000);

  return (
    
        <div className='container mt-5'>
            {isLoggedIn===2? <  Alert  type="success"  message={appMessage.loggedOut}/> :null}
            {isLoggedIn===3? <  Alert  type="danger"  message={appMessage.invalidCredential}/> : null}
            <div className='row'>
                <div className='col-md-7'>
                    <img className='image-fluid w-100' src={LoginImage} alt=''/>
                </div>
                <div className='col-md-5'>
                    <LoginForm/>
                </div>
            </div>
        </div>
    
  )
}

export default LoginPage