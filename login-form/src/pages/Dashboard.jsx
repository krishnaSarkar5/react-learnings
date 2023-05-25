import React, { useEffect, useState } from 'react'
import {getUserLoggedInData,getUserData} from '../services/UserService'

const Dashboard = () => {


    const [userData,setUserData] = useState({});

    useEffect(()=>{
       const data= getLoggedInUserData();
       setUserData(data)
    },[])

    const getLoggedInUserData=()=>{
       const response = getLoggedInData();
      return getUserData(response?.email);
    }
    const getLoggedInData=()=>{
      return getUserLoggedInData();
  }

  return (
    <div>Dashboard {userData.firstName} </div>
  )
}

export default Dashboard