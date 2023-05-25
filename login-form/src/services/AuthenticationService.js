import { login } from "../backend/BackendAuthService"
import { failureResponse, successResponse } from "../utils/ResponseUtil";
import { saveToSessionStorage } from "../utils/SessionStorageUtil"


export const authenticate = (email,password)=>{
    const response =   login(email,password)

    console.log(response)
    if(response?.status){
        saveToSessionStorage("loginData",response?.data);
        console.log("save data to session storage")
        return successResponse(response.message,null);
    }

    return failureResponse(response.message,null);
}