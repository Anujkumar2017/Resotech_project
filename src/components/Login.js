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
        <div className='main-container login'>
            <div className='logo-container'>
            </div>
            <div className='card'>
                <p className='h3 mb-3'>Login</p>
                <form>
                    <div className="mb-3">
                        <label htmlFor="inputUserId" className="form-label">User Id</label>
                        <input type="text" className="form-control" id="inputUserId" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword1" value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" onClick={togglePasswordVisibity} id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                <span className='small'>Show Password</span>
                            </label>
                        </div>
                        <Link to='/forgotPassword' style={{ textDecoration: 'none' }}><p className="text-danger small">Forget Password</p></Link>
                    </div>
                    <button className="btn btn-primary" onClick={(e) => submit(e)}>Submit</button>
                </form >
            </div >
        </div>
    )
}

export default Login;