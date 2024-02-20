import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ChangePassword = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const nevigate = useNavigate();

    function submit(e) {
        e.preventDefault();
        // console.log("hi")
        console.log(email, password);
        nevigate("/");
    }

    function togglePasswordVisibity() {
        var x = document.getElementById('inputPassword1');
        if (x.type == 'password') {
            x.type = 'text';
        } else {
            x.type = 'password';
        }
    }

    return (
        <div className='main-container login'>
            <div className='logo-container'>
            </div>
            <div className='card'>
                <p className='h3 mb-3'>Change Password</p>
                <form>
                    <div className="mb-3">
                        <label htmlFor="inputEmailId" className="form-label">Email Id</label>
                        <input type="text" className="form-control" id="inputEmailId" value="anuj.maurya@resotechsolutions.com" disabled />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputOTP" className="form-label">Email-OTP</label>
                        <input type="number" className="form-control" id="inputOTP" placeholder='Enter Email-OTP' />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputPassword1" className="form-label">New Password</label>
                        <input type="password" className="form-control" id="inputPassword1" placeholder='Enter New Password' />
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" onClick={togglePasswordVisibity} id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                <span className='small'>Show Password</span>
                            </label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputConfirmPassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="inputConfirmPassword" placeholder='Enter Confirm Password'/>
                    </div>

                    <button className="btn btn-primary" onClick={(e) => submit(e)}>Submit</button>
                </form >
            </div >
        </div>
    )
}

export default ChangePassword;