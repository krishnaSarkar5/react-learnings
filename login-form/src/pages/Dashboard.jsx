import React, { useEffect, useState } from 'react'
import {getUserLoggedInData,getUserData} from '../services/UserService'

const Dashboard = () => {


    const [userData,setUserData] = useState({});

    useEffect(()=>{
       const data= getLoggedInUserData();
       setUserData(data)
    },[])

    const getLoggedInData=()=>{
        return getUserLoggedInData();
    }


    const getLoggedInUserData=()=>{
       const response = getLoggedInData();
      return getUserData(response?.email);
    }

  return (
    <div>Dashboard {userData.firstName} </div>
  )
}

export default Dashboard