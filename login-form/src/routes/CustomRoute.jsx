import React, {useEffect, useState } from 'react'
import { Route, Routes,Navigate } from "react-router-dom"
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'
import { frontEndPaths } from './RoutePath'
import Dashboard from '../pages/Dashboard'
import {getUserLoggedInData} from '../services/UserService'

const CustomRoute = () => {

  const [isLoggedIn,setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const data= getUserLoggedInData();  
    // const data = JSON.parse(sessionStorage.getItem("loginData"))
    console.log(data?.email);
    if(data?.email!==undefined){
      console.log("if");
      setIsLoggedIn(true)
    }else if(data==null){
      console.log("else if");
      setIsLoggedIn(false)
    }
 },[])

  return (
    <Routes>
      <Route 
      path={frontEndPaths.signup} 
       element={<SignupPage />} />

      {console.log({isLoggedIn})}

      <Route path={frontEndPaths.login} element={isLoggedIn===true? <Navigate to={frontEndPaths.dashboard}/> :   <LoginPage setIsLoggedIn={setIsLoggedIn}/>} />

      <Route path={frontEndPaths.dashboard} element={   isLoggedIn===true? <><Dashboard/></> : <Navigate to={frontEndPaths.login}/>} />

      
    </Routes>
  )
}

export default CustomRoute