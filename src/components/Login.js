import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const nevigate = useNavigate();

    async function submit(e) {
        e.preventDefault();
        const data = await axios.post('https://appdev.resotechsolutions.in/onboarding/login', {
            headers: {
                'username': userId,
                'password': password
            }
        })

        console.log(data);

        console.log(userId, password);
        // nevigate("/dashboard");
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
                <p className='h3 mb-3'>Login</p>
                <form onSubmit={(e) => { submit(e) }}>
                    <div className="mb-3">
                        <label htmlFor="inputUserId" className="form-label">User Id</label>
                        <input type="text" className="form-control" id="inputUserId" value={userId} onChange={e => setUserId(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword1" value={password}
                            onChange={(e) => setPassword(e.target.value)} required />
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" onClick={togglePasswordVisibity} id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                <span className='small'>Show Password</span>
                            </label>
                        </div>
                        <Link to='/forgotPassword' style={{ textDecoration: 'none' }}><p className="text-danger small">Forget Password</p></Link>
                    </div>
                    <button className="btn btn-primary" type='submit'>Submit</button>
                </form >
            </div >
        </div>
    )
}

export default Login;