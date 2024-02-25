import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner';

const ForgotPassword = () => {

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [OTP, setOTP] = useState("");

    const [OTPreceived, setOTPreceived] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const navigate = useNavigate();

    async function getOTP(e) {
        e.preventDefault();

        setLoading(true);
        setStatusMessage("");

        try {
            const response = await axios.post('https://appdev.resotechsolutions.in/onboarding/forget-password/generate-otp',
                {
                    'email': email
                }
            );

            setLoading(false);

            const data = response.data;
            console.log(data);

            // email does not exist
            if (data.status.statusCode == 3)
                setStatusMessage(data.status.statusMessage);

            // Credential correct    
            if (data.status.statusCode == 1) {
                console.log('email sent');
                setStatusMessage(data.status.statusMessage);
                setOTPreceived(true);
            }

        } catch (error) {
            console.log(error);
        }
    }

    async function submit(e) {
        e.preventDefault();
        setStatusMessage("");

        if (password == confirmPassword) {
            setLoading(true);
            try {
                const response = await axios.post('https://appdev.resotechsolutions.in/onboarding/forget-password/validate-otp-password',
                    {
                        'email': email,
                        'otp': OTP,
                        'password': password
                    }
                );

                setLoading(false);

                const data = response.data;
                console.log(data);

                // OTP does not match
                if (data.status.statusCode == -1)
                    setStatusMessage(`OTP does not match`);

                // Credential correct    
                if (data.status.statusCode == 1) {
                    console.log('password change successfully');
                    setStatusMessage(`Password Changed login to continue`);

                    setTimeout(() => {
                        // Goto login
                        navigate('/');
                    }, 1000);
                }

            } catch (error) {
                console.log(error);
            }
        } else {
            setStatusMessage(`Passwords does not match`);
        }
    }

    function togglePasswordVisibity() {
        var x = document.getElementById('inputPassword');
        if (x.type == 'password') {
            x.type = 'text';
        } else {
            x.type = 'password';
        }
    }

    const emailForm = (
        <form onSubmit={(e) => getOTP(e)}>
            <p className='h3 mb-3'> Forgot Password</p>
            <div className="mb-3">
                <label htmlFor="inputEmailId" className="form-label">Email Id</label>
                <input type="text" className="form-control" id="inputEmailId" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <p className='h6 text-danger mb-3 small'>{statusMessage}</p>
            {loading && <Spinner />}
            <Link to='/' style={{ textDecoration: 'none' }}><button className="me-3 btn btn-primary">Login</button></Link>
            <button type='submit' className="btn btn-primary">Get OTP</button>
        </form >
    );

    const changePasswordForm = (
        <form onSubmit={(e) => { submit(e) }}>
            <p className='h3 mb-3'>Change Password</p>
            <div className="mb-3">
                <label htmlFor="inputEmailId" className="form-label">Email Id</label>
                <input type="text" className="form-control" id="inputEmailId" value={email} disabled />
            </div>

            <div className="mb-3">
                <label htmlFor="inputOTP" className="form-label">Email-OTP</label>
                <input type="number" className="form-control" id="inputOTP" placeholder='Enter Email-OTP' value={OTP} onChange={(e) => { setOTP(e.target.value) }} required />
            </div>

            <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">New Password</label>
                <input type="password" className="form-control" id="inputPassword" placeholder='Enter New Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" onClick={togglePasswordVisibity} id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        <span className='small'>Show Password</span>
                    </label>
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="inputConfirmPassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="inputConfirmPassword" placeholder='Enter Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>
            <p className='h6 text-danger mb-3 small'>{statusMessage}</p>
            {loading && <Spinner />}
            <button type='submit' className="btn btn-primary">Submit</button>
        </form >
    );


    return (
        <div className='main-container forgot-password'>
            <div className='logo-container'>
            </div>
            <div className='card'>
                {OTPreceived ? changePasswordForm : emailForm}
            </div >
        </div>
    )
}

export default ForgotPassword;