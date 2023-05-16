import React, { useState } from 'react'
import './Form.css'
import '../utils/Validation'
import { validName } from '../utils/Validation';

const Form = () => {

    const [firstName,setFirstName] = useState();
    const [validNameState,setValidNameState] = useState(true);
    const [lastName,setLastName] = useState();
    const [countryCode,setCountryCode] = useState();
    const [phone,setPhone] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [confirmPassword,setConfirmPassword] = useState();
    const [userData,setUserData] = useState();

    const handleFirstName = (e)=>{
        setFirstName(e.target.value);
        let b = validName(firstName);
        setValidNameState(b);
        console.log({firstName});
        console.log({b});
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
                        <input type="text"  className={`form-control ${validNameState? 'is-valid' : ''}`} value={firstName} placeholder="First Name" onChange={(e)=>handleFirstName(e)}/>
                        <div className="valid-feedback">Valid email address</div>
                        <div className="invalid-feedback">Please enter a valid email address</div>
                    </div>
                </div>        
                <div className="col">
                    <div className="mb-3">
                        <input type="text" className="form-control"  placeholder="Last Name" onChange={(e)=>handleLastName(e)}/>
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
                        <input type="text" className="form-control"  placeholder="Country code" onChange={(e)=>handleCountryCode(e)}/>
                    </div>
                </div>        
                <div className="col">
                    <div className="mb-3">
                        <input type="text" className="form-control"  placeholder="Phone" onChange={(e)=>handlePhone(e)}/>
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
                        <input type="email" className="form-control"  placeholder="email address" onChange={(e)=>handleEmail(e)}/>
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
                        <input type="password" className="form-control"  placeholder="password" onChange={(e)=>handlePassowrd(e)}/>
                    </div>
                </div>  
                <div className="col">
                    <div className="mb-3">
                        <input type="password" className="form-control"  placeholder="confirm password" onChange={(e)=>handleConfirmPassowrd(e)}/>
                    </div>
                </div>         
            </div>

             {/* Submit column */}
             <div className="row">
                <div className="col">
                    <button type="submit" className="btn btn-success" >Register</button>
                </div>
                        
            </div>

        </div>
        </form>
    </div>
  )
}

export default Form