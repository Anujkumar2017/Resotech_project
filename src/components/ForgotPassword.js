import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const nevigate = useNavigate();

    function submit(e) {
        e.preventDefault();
        // console.log("hi")
        console.log(email, password);
        nevigate("/dashboard");
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
        <div className='main-container forgot-password'>
            <div className='logo-container'>
            </div>
            <div className='card'>
                <p className='h3 mb-3'>Forgot Password</p>
                <form>

                    <div className="mb-3">
                        <label htmlFor="inputNewPassword" className="form-label">New Password</label>
                        <input type="text" className="form-control" id="inputNewPassword" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputConfirmPassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="inputConfirmPassword" value={password}
                            onChange={(e) => setPassword(e.target.value)} />

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" onClick={togglePasswordVisibity} id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                <span className='small'>Show Password</span>
                            </label>
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={(e) => submit(e)}>Submit</button>
                </form >
            </div >
        </div>
    )
}

export default Login;