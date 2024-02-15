import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Dashboard = () => {
    const percentage = 66;

    function openForm() {
        document.getElementById("myForm").style.display = "block";
    }

    function closeForm() {
        document.getElementById("myForm").style.display = "none";
    }

    function changeForm(e, n) {
        e.preventDefault();
        document.getElementById(`form-${n}`).style.display = "none";
        document.getElementById(`form-${(n + 1) % 5}`).style.display = "block";

        if (n == 4) {
            closeForm();
        }
    }

    return (
        <div className="main-container">
            <div className="left">
                <p className='welcome'>Welcome <span className='name'>Anuj!</span></p>
                <div className="user-image-container"></div>
                <div className="message">Welcome to our team! Your expertise is invaluable. We'll provide support as you familiarize with our codebase and processes. Collaboration is key – feel free to ask questions and share ideas. Let's innovate and make a positive impact together. Welcome to our developer community!</div>
            </div>
            <div className="right">
                <div className="upper">
                    <div className="message">
                        <p>Are you excited to embark on your new role as a developer?</p>
                        <p>We're here to support you every step of the way. To make your onboarding process seamless, we invite you to complete your profile. This will help us tailor our support and resources to ensure you thrive in your new position. We're eager to dive into this journey with you and learn more about your background and interests!</p>
                    </div>
                    <div className="progressbar">
                        <CircularProgressbar value={percentage} text={`${percentage}%`} />
                    </div>
                </div>
                <div className="upload-container">
                    <div className="main-upload ">Upload Required Details
                        <button type="button" className="btn btn-primary align-right" onClick={openForm}>UPLOAD</button>
                    </div>
                    <div className="upload">Personal Information
                        <button type="button" className="btn btn-danger align-right">Incomplete</button>
                    </div>
                    <div className="upload">Education
                        <button type="button" className="btn btn-danger align-right">Incomplete</button>
                    </div>
                    <div className="upload">PAN Card
                        <button type="button" className="btn btn-danger align-right">Incomplete</button>
                    </div>
                    <div className="upload">Aadhar Card
                        <button type="button" className="btn btn-danger align-right">Incomplete</button>
                    </div>
                    <div className="upload">Agreement Form
                        <button type="button" className="btn btn-danger align-right">Incomplete</button>
                    </div>
                </div>

                <div className="form-popup" id="myForm">
                    <form className="form-container" id="form-0">
                        <h1>Personal Information</h1>

                        <div className="mb-3">
                            <label htmlFor="inputName" className="form-label">Name</label>
                            <input type="text" className="form-control" id="inputName" placeholder='Enter Name' />
                        </div>

                        <label className="mb-3" for="inputGender">Gender</label>
                        <select className="form-control custom-select mb-3" id="inputGender">
                            <option selected>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>

                        <div className="mb-3">
                            <label htmlFor="inputContactNo" className="form-label">Contact No.</label>
                            <input type="number" className="form-control" id="inputContactNo" placeholder='Enter Contact No.' />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="inputAddress1" className="form-label">Address Line 1</label>
                            <input type="text" className="form-control" id="inputAddress1" placeholder='Enter House No. and Area' />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="inputAddress2" className="form-label">Address Line 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder='Enter City and State' />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="inputPinCode" className="form-label">Pin Code</label>
                            <input type="number" className="form-control" id="inputPinCode" placeholder='Enter Pin Code' />
                        </div>

                        <button type="button" className="btn btn-danger" onClick={closeForm}>Close</button>
                        <button type="submit" className="btn btn-primary" onClick={(e) => changeForm(e, 0)}>Next</button>
                    </form>

                    <form className="form-container" id="form-1" style={{ display: "none" }}>
                        <h1>Education</h1>
                        <button type="button" className="btn btn-danger" onClick={closeForm}>Close</button>
                        <button type="submit" className="btn btn-primary" onClick={(e) => changeForm(e, 1)}>Next</button>
                    </form>

                    <form className="form-container" id="form-2" style={{ display: "none" }}>
                        <h1>PAN Card</h1>
                        <button type="button" className="btn btn-danger" onClick={closeForm}>Close</button>
                        <button type="submit" className="btn btn-primary" onClick={(e) => changeForm(e, 2)}>Next</button>
                    </form>

                    <form className="form-container" id="form-3" style={{ display: "none" }}>
                        <h1>Aadhar Card</h1>
                        <button type="button" className="btn btn-danger" onClick={closeForm}>Close</button>
                        <button type="submit" className="btn btn-primary" onClick={(e) => changeForm(e, 3)}>Next</button>
                    </form>
                    <form className="form-container" id="form-4" style={{ display: "none" }}>
                        <h1>Agreement Form</h1>
                        <button type="button" className="btn btn-danger" onClick={closeForm}>Close</button>
                        <button type="submit" className="btn btn-primary" onClick={(e) => changeForm(e, 4)}>Next</button>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Dashboard;