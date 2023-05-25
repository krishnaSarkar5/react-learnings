
import { removeLoggedInData } from '../utils/SessionStorageUtil';



export const Logout = (isLoggedIn,setIsLoggedIn) => {

console.log(isLoggedIn)

 if(isLoggedIn){
    console.log("inside logout funtion")

   // further call backend logout api and check the response

    removeLoggedInData();
    setIsLoggedIn(2)
 }

 console.log("outside logout funtion")
}

