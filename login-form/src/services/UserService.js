
import { getfromSessionStorage } from "../utils/SessionStorageUtil";
import { setData,getData } from "../utils/StorageUtil"

export const getUserData =(email)=>{
  return getData(email);
}

export const saveUserData =(email,data)=>{
   setData(email,data);
}


export const getUserLoggedInData=()=>{
  return getfromSessionStorage("loginData");
}
