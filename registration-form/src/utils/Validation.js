import React from 'react'



export const validName = (name) => {

    if (name == undefined || name.trim().length <= 3) {
        return false;
    }
    return true;
}

export const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };


  export const validatePhone = (phone) => {
    // Remove any non-digit characters from the phone number
    const cleanedPhone = phone.replace(/\D/g, "");
    
    // Check if the cleaned phone number is 10 digits long
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(cleanedPhone);
  };


  export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{6,}$/;
    return passwordRegex.test(password);
  };

  export const validateConfirmPassword = (password1,password2) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{6,}$/;
    return passwordRegex.test(password1) && passwordRegex.test(password2) && password1===password2;
  };