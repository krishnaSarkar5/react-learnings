import React, { useEffect, useState } from 'react'
import './Form.css'
import '../utils/Validation'
import { validName,validateEmail,validatePassword,validatePhone,validateConfirmPassword } from '../utils/Validation';

const Form = () => {

    const [firstName,setFirstName] = useState("");
    const [validFirstName,setValidFirstName] = useState(false);

    const [lastName,setLastName] = useState("");
    const [validLastName,setValidLastName] = useState(false);


    const [countryCode,setCountryCode] = useState("");

    const [phone,setPhone] = useState("");
    const [validPhone,setValidPhone] = useState(false);

    const [email,setEmail] = useState("");
    const [validEmail,setValidEmail] = useState(false);


    const [password,setPassword] = useState("");
    const [passwordType,setPasswordType] = useState("password");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [passwordTypeCP,setPasswordTypeCP] = useState("password");
    const [validConfirmPassword,setValidConfirmPassword] = useState(false);
    const [validPassword,setValidPassword] = useState(false);

    // const [isButtonDisable,setIsButtonDisable] = useState(true);


    const [userData,setUserData] = useState();


    useEffect(()=>{
        let b = validName(firstName);
        setValidFirstName(b);
    },[firstName])



    useEffect(()=>{
        let b = validName(lastName);
        setValidLastName(b);
        
    },[lastName])

    useEffect(()=>{
        let b = validatePhone(phone);
        setValidPhone(b);
       
    },[phone])


    useEffect(()=>{
        let b = validateEmail(email);
        setValidEmail(b);
        
    },[email])


    useEffect(()=>{
        let b = validatePassword(password);
        setValidPassword(b);
       
    },[password])

    useEffect(()=>{
        let b = validateConfirmPassword(password,confirmPassword);
        setValidConfirmPassword(b);
       
    },[confirmPassword])



    



    const handleFirstName = (e)=>{
        setFirstName(e.target.value);
        
    }
    
    const handleLastName = (e)=>{
        setLastName(e.target.value);
        
    }
    const handleCountryCode = (e)=>{
        setCountryCode(e.target.value);
            }
    const handlePhone = (e)=>{
        setPhone(e.target.value);
       
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value);
    }
    const handlePassowrd = (e)=>{
        setPassword(e.target.value);
    }

    const handleConfirmPassowrd = (e)=>{
        setConfirmPassword(e.target.value);
    }


    const togglePassword = ()=>{
        setPasswordType(previousValue=>{
            if(previousValue==="password"){
                return "text";
            }else{
                return "password";
            }
        })
        // setPasswordType("text")
    }


    const togglePasswordCP = ()=>{
        setPasswordTypeCP(previousValue=>{
            if(previousValue==="password"){
                return "text";
            }else{
                return "password";
            }
        })
        // setPasswordType("text")
    }



    const handleSubmit=(e)=>{
        e.preventDefault();
        const userData = {
            firstName:firstName,
            lastName:lastName,
            countryCode:countryCode,
            phone: phone,
            email:email,
            password:password
        }

        setUserData(userData);
        console.log({userData});
    }







  return (

    <div className='form'>
        <form  className='needs-validation'   onSubmit={(e)=>handleSubmit(e)}>
        <div className="container text-center">

            {/* Name column */}
            <div className="row">
                <div className="col">
                Name
                </div>
                <div className="col">
                    <div className="mb-3">
                        <input type="text"  className={`form-control ${validFirstName? 'is-valid' : ''}`} value={firstName} placeholder="First Name" onChange={handleFirstName}/>
                        <div className="invalid-feedback">First name should be contain atleast 3 letters</div>
                    </div>
                </div>        
                <div className="col">
                    <div className="mb-3">
                        <input type="text"className={`form-control ${validLastName? 'is-valid' : ''}`}  placeholder="Last Name" onChange={handleLastName}/>
                        <div className="invalid-feedback">Last name should be contain atleast 3 letters</div>
                    </div>
                </div>   
            </div>

            {/* Phone column */}
            <div className="row">
                <div className="col">
                Phone
                </div>
                <div className="col">
                    <div className="mb-3">
                        <input type="text" className="form-control"  placeholder="Country code" onChange={handleCountryCode}/>
                    </div>
                </div>        
                <div className="col">
                    <div className="mb-3">
                        <input type="text" className={`form-control ${validPhone? 'is-valid' : ''}`}  placeholder="Phone" onChange={handlePhone}/>
                        <div className="invalid-feedback">Enter a valid phone number</div>
                    </div>
                </div>   
            </div>

            {/* Email column */}
            <div className="row">
                <div className="col">
                Email
                </div>
                <div className="col">
                    <div className="mb-3">
                        <input type="email" className={`form-control ${validEmail? 'is-valid' : ''}`}  placeholder="email address" onChange={handleEmail}/>
                        <div className="invalid-feedback">Please enter a valid email address</div>
                    </div>
                </div>           
            </div>

            {/* Password column */}
            <div className="row">
                <div className="col">
                Password
                </div>
                <div className="col">
                    <div className="mb-3">
                        <input type={passwordType} className={`form-control ${validPassword? 'is-valid' : ''}`}  placeholder="password" onChange={handlePassowrd}/>
                        <div className="invalid-feedback">Password should be atleast 6 letters</div>
                        {/* <div className="col"> */}
                        {/* <i className="bi bi-eye-slash"></i> */}
                            <div className="btn btn-outline-primary" onClick={togglePassword}>{ passwordType==="password"? "show" :"hide" }
                             {/* { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> } */}
                            </div>
                        {/* </div> */}
                    </div>
                </div>  
                <div className="col">
                    <div className="mb-3">
                        <input type={passwordTypeCP} className={`form-control ${validConfirmPassword? 'is-valid' : ''}`}  placeholder="confirm password" onChange={handleConfirmPassowrd}/>
                        <div className="invalid-feedback">Password does not match</div>
                        
                        <div className="btn btn-outline-primary" onClick={togglePasswordCP}>{ passwordTypeCP==="password"? "show" :"hide" }
                             {/* { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> } */}
                            </div>
                       
                    </div>
                </div>         
            </div>

             {/* Submit column */}
             <div className="row">
                <div className="col">
                    <button type="submit" className="btn btn-success" disabled={!(validFirstName && validLastName && validEmail && validPhone && validPassword && validConfirmPassword)} >Register</button>
                </div>
                        
            </div>

        </div>
        </form>
    </div>
  )
}

export default Form