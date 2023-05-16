import React from 'react'



export const validName = (name) => {

    if (name == undefined || name.trim().length <= 3) {
        return false;
    }
    return true;
}





