import React, { useState } from 'react';

const Form = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function submit(e) {
        e.preventDefault();
        // console.log("hi")
        console.log(email, password);
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
        <>
            <div className='card'>
                <p className='h3 mb-3'>Login</p>
                <form>
                    <div className="mb-3">
                        <label htmlFor="inputEmail1" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="inputEmail1" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)} />
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
                        <p><a href="#" className="text-danger small"  > Forget Password</a></p>
                    </div>
                    <button className="btn btn-primary" onClick={(e) => submit(e)}>Submit</button>
                </form >
            </div >
        </>
    )
}

export default Form;