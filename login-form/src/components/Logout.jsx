import React from 'react'
import { removeLoggedInData } from '../utils/SessionStorageUtil';
import { Link, useNavigate } from 'react-router-dom';
import { frontEndPaths } from '../routes/RoutePath';
import {LoginContext} from '../App'


export const Logout = (isLoggedIn,setIsLoggedIn) => {

console.log(isLoggedIn)

 if(isLoggedIn){
    console.log("inside logout funtion")
    removeLoggedInData();
    setIsLoggedIn(2)
 }

 console.log("outside logout funtion")
}

