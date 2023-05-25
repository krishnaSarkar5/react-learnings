import React, {useEffect, useContext } from 'react'
import { Route, Routes,Navigate } from "react-router-dom"
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'
import { frontEndPaths } from './RoutePath'
import Dashboard from '../pages/Dashboard'
import {getUserLoggedInData} from '../services/UserService'
import {LoginContext} from '../App'


const CustomRoute = () => {

  const {isLoggedIn,setIsLoggedIn} = useContext(LoginContext);

  useEffect(()=>{
    const data= getUserLoggedInData();  
    // const data = JSON.parse(sessionStorage.getItem("loginData"))
    console.log(data?.email);
    if(data?.email!==undefined){
      console.log("if");
      setIsLoggedIn(1)
    }else if(data==null){
      console.log("else if");
      setIsLoggedIn(0)
    }
 },[])

  return (
  
      <Routes>
        <Route 
        path={frontEndPaths.signup} 
        element={<SignupPage />} />

        {console.log({isLoggedIn})}

        <Route path={frontEndPaths.login} element={isLoggedIn===1? <Navigate to={frontEndPaths.dashboard}/> :   <LoginPage/>} />

        <Route path={frontEndPaths.dashboard} element={   isLoggedIn===1? <><Dashboard/></> : <Navigate to={frontEndPaths.login}/>} />

        {/* <Route path={frontEndPaths.logout} element={   isLoggedIn===true? <><Logout/></> : <Navigate to={frontEndPaths.login}/>} /> */}
      </Routes>

  )
}

export default CustomRoute