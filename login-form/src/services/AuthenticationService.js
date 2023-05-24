import { login } from "../backend/BackendAuthService"
import { failureResponse, successResponse } from "../utils/ResponseUtil";
import { saveToSessionStorage } from "../utils/SessionStorageUtil"


export const authenticate = (email,password)=>{
    const response =   login(email,password)

    if(response?.status){
        saveToSessionStorage("loginData",response?.data);
        return successResponse(response.message,null);
    }

    return failureResponse(response.message,null);
}