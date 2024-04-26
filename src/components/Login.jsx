import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Slide, toast } from 'react-toastify';

import Spinner from './Spinner';

const Login = () => {

    const [loading, setLoading] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            validateToken(token);
        }
    }, []);

    async function validateToken() {
        try {
            const response = await axios.post('https://appdev.resotechsolutions.in/onboarding/validate-token', {},
                {
                    headers: {
                        'token': localStorage.getItem('token'),
                    }
                }
            );

            const data = response.data;
            console.log(data);

            if (data.status.statusCode == 1) navigate('/dashboard');

        } catch (error) {
            console.log(error);
        }
    }

    async function submit(e) {
        e.preventDefault();

        setLoading(true);

        try {
            const response = await axios.post('https://appdev.resotechsolutions.in/onboarding/login', {}, {
                headers: {
                    'username': userName,
                    'password': password
                }
            });

            setLoading(false);

            const data = response.data;
            console.log(data);


            // User does not exist
            if (data.status.statusCode == 3)
                toast.error(data.status.statusMessage, {
                    position: "top-center",
                    autoClose: 3000,
                    closeOnClick: true,
                    pauseOnHover: true,
                    transition: Slide,
                });

            // Invalid password
            if (data.status.statusCode == -1)
                toast.error(data.status.statusMessage, {
                    position: "top-center",
                    autoClose: 3000,
                    closeOnClick: true,
                    pauseOnHover: true,
                    transition: Slide,
                });

            // Credential correct    
            if (data.status.statusCode == 1) {
                console.log('login successfull');

                //setting token to local storage
                localStorage.setItem('token', data.data.token);

                console.log('passwordUpdated: ' + data.data.passwordUpdated);

                // First time login
                if (!data.data.passwordUpdated) {
                    navigate('/updatePassword', {
                        state: {
                            userName: data.data.username
                        }
                    })
                } else {
                    toast.success(data.status.statusMessage, {
                        position: "top-center",
                        autoClose: 1500,
                        closeOnClick: true,
                        pauseOnHover: true,
                        transition: Slide,
                    });

                    setTimeout(() => {
                        // Goto dashboard
                        navigate('/dashboard');
                    }, 1000);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    function togglePasswordVisibity(target) {
        var x = document.getElementById(target);
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
                    <div className="mb-3 fw-bold">
                        <label htmlFor="inputUserName" className="form-label">Username</label>
                        <input type="text" className="form-control" id="inputUserName" value={userName} onChange={e => setUserName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label fw-bold">Password</label>
                        <input type="password" className="form-control" id="inputPassword" value={password}
                            onChange={(e) => setPassword(e.target.value)} required />
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" onClick={() => togglePasswordVisibity('inputPassword')} id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                <span className='small'>Show Password</span>
                            </label>
                        </div>
                        <Link to='/forgotPassword' style={{ textDecoration: 'none' }}><p className="text-danger small">Forget Password</p></Link>
                    </div>
                    {loading && <Spinner />}
                    <button className="btn btn-primary" type='submit'>Submit</button>
                </form >
            </div >
        </div>
    )
}

export default Login;