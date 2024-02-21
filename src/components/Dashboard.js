import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Cross from './images/cross.png';
import { CircularProgressbar } from 'react-circular-progressbar';


const Dashboard = () => {

    const percentage = 66;
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
        }
    });

    function openForm() {
        document.getElementById("myForm").style.display = "block";
    }

    function closeForm() {
        document.getElementById("myForm").style.display = "none";
    }

    function prevForm(e, n) {
        e.preventDefault();
        document.getElementById(`form-${n}`).style.display = "none";
        document.getElementById(`form-${(n - 1) % 6}`).style.display = "block";
    }

    function nextForm(e, n) {
        e.preventDefault();
        document.getElementById(`form-${n}`).style.display = "none";
        document.getElementById(`form-${(n + 1) % 6}`).style.display = "block";

        if (n == 5) {
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
                        <p className='h5 font-weight-bold'>Are you excited to embark on your new role as a developer?</p>
                        <p className='message-p2'>We're here to support you every step of the way. To make your onboarding process seamless, we invite you to complete your profile. This will help us tailor our support and resources to ensure you thrive in your new position. We're eager to dive into this journey with you and learn more about your background and interests!</p>
                    </div>
                    <div className="progressbar">
                        <CircularProgressbar value={percentage} text={`${percentage}%`} />
                    </div>
                </div>
                <div className="upload-container">
                    <div className="main-upload ">Begin Your Journey
                        <button type="button" className="btn btn-primary align-right" onClick={openForm}>Start</button>
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
                        <img className='cross-image' height="20px" width="20px" src={Cross} alt="cross" onClick={closeForm} />
                        <h1>Personal Information</h1>

                        <div className="mb-3 fw-bold">
                            <label htmlFor="inputName" className="form-label">Name</label>
                            <input type="text" className="form-control" id="inputName" placeholder='Enter Name' />
                        </div>

                        <label className="mb-3 fw-bold" htmlFor="inputGender">Gender</label>
                        <select className="form-control custom-select mb-3" id="inputGender">
                            <option defaultValue="Select Gender">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>

                        <div className="mb-3 fw-bold">
                            <label htmlFor="inputContactNo" className="form-label">Contact No.</label>
                            <input type="number" className="form-control" id="inputContactNo" placeholder='Enter Contact No.' />
                        </div>

                        <div className="mb-3 fw-bold">
                            <label htmlFor="inputAddress1" className="form-label">Address Line 1</label>
                            <input type="text" className="form-control" id="inputAddress1" placeholder='Enter House No. and Area' />
                        </div>


                        <div className="mb-3 fw-bold">
                            <label htmlFor="inputAddress2" className="form-label">Address Line 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder='Enter City and State' />
                        </div>

                        <div className="mb-3 fw-bold">
                            <label htmlFor="inputPinCode" className="form-label">Pin Code</label>
                            <input type="number" className="form-control" id="inputPinCode" placeholder='Enter Pin Code' />
                        </div>

                        <button type="submit" className="btn btn-primary" onClick={(e) => nextForm(e, 0)}>Next</button>
                    </form>

                    <form className="form-container" id="form-1" style={{ display: "none" }}>
                        <img className='cross-image' height="20px" width="20px" src={Cross} alt="cross" onClick={closeForm} />
                        <p className='h1'>Education</p>
                        <p className='h6'>Graduation</p>
                        <div className="mb-3 fw-bold">
                            <label htmlFor="inputCollege" className="form-label">College Name</label>
                            <input type="text" className="form-control" id="inputCollege" placeholder='Enter College Name' />
                        </div>

                        <div className="mb-3 fw-bold">
                            <label htmlFor="inputDegree" className="form-label">Degree</label>
                            <input type="text" className="form-control" id="inputDegree" placeholder='Eg. B.Tech' />
                        </div>

                        <div className="mb-3 fw-bold">
                            <label htmlFor="inputStream" className="form-label">Stream</label>
                            <input type="text" className="form-control" id="inputStream" placeholder='Eg. Computer Sceince' />
                        </div>

                        <div className="mb-3 fw-bold">
                            <label htmlFor="inputCGPA" className="form-label">CGPA</label>
                            <input type="text" className="form-control" id="inputCGPA" placeholder='Eg. 8.5' />
                        </div>

                        <div className="mb-3 fw-bold">
                            <label htmlFor="inputYOP" className="form-label">Year of Completion</label>
                            <input type="text" className="form-control" id="inputYOP" placeholder='Eg. 2023' />
                        </div>
                        <button type="button" className="btn btn-danger" onClick={(e) => prevForm(e, 1)}>Back</button>
                        <button type="submit" className="btn btn-primary" onClick={(e) => nextForm(e, 1)}>Next</button>
                    </form>

                    <form className="form-container" id="form-2" style={{ display: "none" }}>
                        <img className='cross-image' height="20px" width="20px" src={Cross} alt="cross" onClick={closeForm} />
                        <p className='h1'>PAN Card</p>

                        <div className="mb-3 fw-bold">
                            <label htmlFor="inputPanNo" className="form-label">PAN No</label>
                            <input type="text" className="form-control" id="inputPanNo" placeholder='Enter PAN No.' />
                        </div>

                        <div className="mb-3 fw-bold">
                            <label htmlFor="inputPan" className="form-label">PAN Card</label>
                            <input type="file" className="form-control" id="inputPan" />
                        </div>

                        <button type="button" className="btn btn-danger" onClick={(e) => prevForm(e, 2)}>Back</button>
                        <button type="submit" className="btn btn-primary" onClick={(e) => nextForm(e, 2)}>Next</button>
                    </form>

                    <form className="form-container" id="form-3" style={{ display: "none" }}>
                        <img className='cross-image' height="20px" width="20px" src={Cross} alt="cross" onClick={closeForm} />
                        <p className='h1'>Aadhar Card</p>

                        <div className="mt-3 mb-3 fw-bold">
                            <label htmlFor="inputAadharNo" className="form-label">Aadhar No</label>
                            <input type="text" className="form-control" id="inputAadharNo" placeholder='Enter Aadhar No.' />
                        </div>

                        <div className="mb-3 fw-bold">
                            <label htmlFor="inputAadhar" className="form-label">Aadhar Card</label>
                            <input type="file" className="form-control" id="inputAadhar" />
                        </div>

                        <button type="button" className="btn btn-danger" onClick={(e) => prevForm(e, 3)}>Back</button>
                        <button type="submit" className="btn btn-primary" onClick={(e) => nextForm(e, 3)}>Next</button>
                    </form>
                    <form className="form-container" id="form-4" style={{ display: "none" }}>
                        <img className='cross-image' height="20px" width="20px" src={Cross} alt="cross" onClick={closeForm} />
                        <h1>Agreement Form</h1>
                        <a className="btn btn-outline-primary mb-3 mt-3 fw-bold" href="path_to_file"
                            download="Agreement_Form">
                            Download Agreement Form
                        </a>
                        <p>Kindly download the Agreement Form from above button, review and sign the terms and conditions and then proceed to upload the document below.</p>

                        <div className="mb-3 fw-bold">
                            <label htmlFor="inputCancelCheque" className="form-label">Upload Signed Agreement Form</label>
                            <input type="file" className="form-control" id="inputCancelCheque" />
                        </div>

                        <button type="button" className="btn btn-danger" onClick={(e) => prevForm(e, 4)}>Back</button>
                        <button type="submit" className="btn btn-primary" onClick={(e) => nextForm(e, 4)}>Next</button>
                    </form>
                    <form className="form-container" id="form-5" style={{ display: "none" }}>
                        <img className='cross-image' height="20px" width="20px" src={Cross} alt="cross" onClick={closeForm} />
                        <h1>Financial Form</h1>

                        <div className="mb-3 fw-bold">
                            <label htmlFor="inputBankName" className="form-label">Bank Name</label>
                            <input type="text" className="form-control" id="inputBankName" placeholder='Enter Bank Name' />
                        </div>

                        <div className="mb-3 fw-bold">
                            <label htmlFor="inputAccountNo" className="form-label">Account No</label>
                            <input type="text" className="form-control" id="inputAccountNo" placeholder='Enter Account No.' />
                        </div>

                        <div className="mb-3 fw-bold">
                            <label htmlFor="inputIFSCCode" className="form-label">IFSC Code</label>
                            <input type="text" className="form-control" id="inputIFSCCode" placeholder='Enter IFSC Code' />
                        </div>

                        <div className="mb-3 fw-bold">
                            <label htmlFor="inputBranchName" className="form-label">Branch Name</label>
                            <input type="text" className="form-control" id="inputBranchName" placeholder='Enter IFSC Code' />
                        </div>

                        <div className="mb-3 fw-bold">
                            <label htmlFor="inputCancelCheque" className="form-label">Upload Cancel Cheque</label>
                            <input type="file" className="form-control" id="inputCancelCheque" />
                        </div>

                        <button type="button" className="btn btn-danger" onClick={(e) => prevForm(e, 5)}>Back</button>
                        <button type="submit" className="btn btn-primary" onClick={(e) => nextForm(e, 5)}>Next</button>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Dashboard;