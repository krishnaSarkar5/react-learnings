export const successResponse = (message,data)=>{
    return {
        status:true,
        message:message,
        data:data
    }
}

export const failureResponse = (message,data)=>{
    return {
        status:false,
        message:message,
        data:data
    }
}