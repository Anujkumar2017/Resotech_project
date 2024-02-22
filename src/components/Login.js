import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [statusMessage, setStatusMessage] = useState("");

    const navigate = useNavigate();


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/dashboard');
        }
    });

    async function submit(e) {
        e.preventDefault();
        setStatusMessage("");
        try {
            const response = await axios.post('https://appdev.resotechsolutions.in/onboarding/login', {}, {
                headers: {
                    'username': userName,
                    'password': password
                }
            });

            const data = response.data;
            console.log(data);

            // User does not exist
            if (data.status.statusCode == 3)
                setStatusMessage(data.status.statusMessage);

            // Invalid password
            if (data.status.statusCode == -1)
                setStatusMessage(data.status.statusMessage);

            // Credential correct    
            if (data.status.statusCode == 1) {
                console.log('login successfull');

                //setting token to local storage
                localStorage.setItem('token', data.data.token);

                // First time login
                if (!data.data.passwordUpdated) {
                    console.log(data.data.passwordUpdated);

                    navigate('/updatePassword', {
                        state: {
                            userName: data.data.username
                        }

                    })
                }

                // goto dashboard
                navigate("/dashboard");
            }

        } catch (error) {
            console.log(error);
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

    return (
        <div className='main-container login'>
            <div className='logo-container'>
            </div>
            <div className='card'>
                <p className='h3 mb-3'>Login</p>
                <form onSubmit={(e) => { submit(e) }}>
                    <div className="mb-3">
                        <label htmlFor="inputUserName" className="form-label">Username</label>
                        <input type="text" className="form-control" id="inputUserName" value={userName} onChange={e => setUserName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword" value={password}
                            onChange={(e) => setPassword(e.target.value)} required />
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" onClick={togglePasswordVisibity} id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                <span className='small'>Show Password</span>
                            </label>
                        </div>
                        <Link to='/forgotPassword' style={{ textDecoration: 'none' }}><p className="text-danger small">Forget Password</p></Link>
                    </div>
                    <p className='h6 text-danger mb-3 small'>{statusMessage}</p>
                    <button className="btn btn-primary" type='submit'>Submit</button>
                </form >
            </div >
        </div>
    )
}

export default Login;