import React, { useState } from 'react';
import { useNavigate, useLocation, Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner';

const UpdatePassword = () => {

    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [statusMessage, setStatusMessage] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    const { userName } = location.state;

    async function submit(e) {
        e.preventDefault();

        setStatusMessage("");

        if (password == confirmPassword) {
            setLoading(true);
            try {
                const response = await axios.post('https://appdev.resotechsolutions.in/onboarding/update-password', {}, {
                    headers: {
                        'username': userName,
                        'password': password,
                        'token': localStorage.getItem('token')
                    }
                });

                setLoading(false);

                const data = response.data;
                console.log(data);

                // User does not exist
                if (data.status.statusCode == 3)
                    setStatusMessage(data.status.statusMessage);

                // Invalid token
                if (data.status.statusCode == -1)
                    setStatusMessage(data.status.statusMessage);

                // Credential correct
                if (data.status.statusCode == 1) {
                    console.log('Update Successfull');

                    setStatusMessage(data.status.statusMessage);

                    //clear token
                    localStorage.removeItem('token');

                    setTimeout(() => {
                        // Goto login
                        navigate('/');
                    }, 1000);
                }


            } catch (error) {
                console.log(error);
            }
        }
        else {
            setStatusMessage(`Passwords does not match`);
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
        <div className='main-container forgot-password'>
            <div className='logo-container'>
            </div>
            <div className='card'>
                <form onSubmit={submit}>
                    <p className='h3 mb-3'> Please Update Password</p>
                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">New Password</label>
                        <input type="password" className="form-control" id="inputPassword" value={password} onChange={e => setPassword(e.target.value)} required />

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" onClick={() => togglePasswordVisibity('inputPassword')} />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                <span className='small'>Show Password</span>
                            </label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputConfirmPassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="inputConfirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" onClick={() => togglePasswordVisibity('inputConfirmPassword')} />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                <span className='small'>Show Password</span>
                            </label>
                        </div>
                    </div>
                    <p className='h6 text-danger mb-3 small'>{statusMessage}</p>
                    {loading && <Spinner />}
                    <button type='submit' className="btn btn-primary" >Submit</button>
                </form >
            </div>
        </div >
    )
}

export default UpdatePassword;

