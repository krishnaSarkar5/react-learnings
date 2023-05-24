

export const saveToSessionStorage=(key,value)=>{
    sessionStorage.setItem(key,JSON.stringify(value));
}


export const getfromSessionStorage=(key)=>{
   return JSON.parse(sessionStorage.getItem(key));
}