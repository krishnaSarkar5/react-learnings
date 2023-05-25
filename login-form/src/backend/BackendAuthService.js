
import { appMessage } from '../constants/Message';
import { generateRandomString } from '../utils/CommonUtils';
import { failureResponse, successResponse } from '../utils/ResponseUtil';
import {getUserData} from '../services/UserService'


const authenticateUser= (email,password)=>{

    
    const userData = getUserData(email);

    if(userData===undefined || userData===null){
        return failureResponse(appMessage.invalidCredential,null);
    }
    else if(userData.password===password){
        return successResponse(appMessage.validCredential,{email:email,token:generateRandomString(25)});
    }else{
        return failureResponse(appMessage.invalidCredential,null);
    }

}


export const login = (email,password)=>{
   // later from here we will call backend login api
   return authenticateUser(email,password);
} 