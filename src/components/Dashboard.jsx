import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cross from './images/cross.png';
import { CircularProgressbar } from 'react-circular-progressbar';

import PresonalInfoForm from './forms/PersonalInfoForm';
import EducationInfoForm from './forms/EducationInfoForm';
import PANInfoForm from './forms/PANInfoForm';
import AdhaarInfoForm from './forms/AdhaarInfoForm';
import AgreementInfoForm from './forms/AgreementInfoForm';
import FinancialInfoForm from './forms/FinancialInfoForm';
import { Slide, toast } from 'react-toastify';

const Dashboard = () => {

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
        }
        fetchData();
        fetchForm();
    }, []);

    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const [form, setForm] = useState({});

    let { personalDetails, aadharDetails, agreementDetails, bankDetails, education, marksheetDetails, panDetails } = form;

    async function fetchForm() {
        try {
            const response = await axios.post('https://appdev.resotechsolutions.in/onboarding/get-headers');

            const data = response.data;
            console.log(data.data);

            setForm(data.data);
        } catch (error) {
            console.log(error);
        }
    }



    async function fetchData() {
        try {
            const response = await axios.post('https://appdev.resotechsolutions.in/onboarding/landing', {}, {
                headers: {
                    'token': localStorage.getItem('token')
                }
            });

            const data = response.data;
            console.log(data);

            // Valid Token
            if (data.status.statusCode == 1) {
                console.log("Data Fetched & Valid token");
                setUserData(data.data);
                console.log(userData);
            }

        } catch (error) {
            console.log(error);
        }

    }

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

    function nextForm(e, n, formData) {
        e.preventDefault();
        console.log(formData);
        if (n == 0)
            submitPersonalInfoForm(formData);
        else if (n == 1)
            submitEducationalInfoForm(formData);
        else if (n == 5)
            submitFinancialInfoForm(formData);
        else
            submitOtherForm(formData);
        document.getElementById(`form-${n}`).style.display = "none";
        document.getElementById(`form-${(n + 1) % 6}`).style.display = "block";

        if (n == 5) {
            closeForm();
        }
    }

    async function submitPersonalInfoForm(formData) {
        console.log(formData);
        try {
            const response = await axios.post('https://appdev.resotechsolutions.in/onboarding/update-details', formData, {
                headers: {
                    'token': localStorage.getItem('token')
                }
            });

            const data = response.data;
            console.log(data);

            // Valid Token
            if (data.status.statusCode == 1) {
                console.log("Data Updated!");
                toast.success(data.status.statusMessage, {
                    position: "top-center",
                    autoClose: 1000,
                    closeOnClick: true,
                    pauseOnHover: true,
                    transition: Slide,
                });
            }

        } catch (error) {
            console.log(error);
        }
    }

    async function submitEducationalInfoForm(formData) {
        console.log(formData);
        try {
            const response = await axios.post('https://appdev.resotechsolutions.in/onboarding/update-education', formData, {
                headers: {
                    'token': localStorage.getItem('token')
                }
            });

            const data = response.data;
            console.log(data);

            // Valid Token
            if (data.status.statusCode == 1) {
                console.log("Data Updated!");
                toast.success(data.status.statusMessage, {
                    position: "top-center",
                    autoClose: 1000,
                    closeOnClick: true,
                    pauseOnHover: true,
                    transition: Slide,
                });
            }

        } catch (error) {
            console.log(error);
        }
    }

    async function submitOtherForm(formData) {
        console.log(formData);
        try {
            const response = await axios.post('https://appdev.resotechsolutions.in/onboarding/save-document', formData, {
                headers: {
                    'token': localStorage.getItem('token')
                }
            });

            const data = response.data;
            console.log(data);

            // Valid Token
            if (data.status.statusCode == 1) {
                console.log("Data Updated!");
                toast.success(data.status.statusMessage, {
                    position: "top-center",
                    autoClose: 1000,
                    closeOnClick: true,
                    pauseOnHover: true,
                    transition: Slide,
                });
            }

        } catch (error) {
            console.log(error);
        }
    }

    async function submitFinancialInfoForm(formData) {
        console.log(formData);
        try {
            const response = await axios.post('https://appdev.resotechsolutions.in/onboarding/update-bank', formData, {
                headers: {
                    'token': localStorage.getItem('token')
                }
            });

            const data = response.data;
            console.log(data);

            // Valid Token
            if (data.status.statusCode == 1) {
                console.log("Data Updated!");
                toast.success(data.status.statusMessage, {
                    position: "top-center",
                    autoClose: 1000,
                    closeOnClick: true,
                    pauseOnHover: true,
                    transition: Slide,
                });
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="main-container">
            <div className="left">
                <p className='welcome'>Welcome <span className='name'>{userData.firstName}</span></p>
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
                        <CircularProgressbar value={userData["Percentage Complete"]} text={`${userData["Percentage Complete"]}%`} />
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
                        <button type="button" className="btn btn-success align-right">{userData.Aadhar ? 'Incomplete' : 'Complete'}</button>
                    </div>
                    <div className="upload">Agreement Form
                        <button type="button" className="btn btn-danger align-right">Incomplete</button>
                    </div>
                </div>

                <div className="form-popup" id="myForm">
                    <img className='cross-image' height="20px" width="20px" src={Cross} alt="cross" onClick={closeForm} />

                    {personalDetails && <PresonalInfoForm personalInfoRules={personalDetails} nextForm={nextForm} />}
                    {education && <EducationInfoForm educationalInfoRules={education} nextForm={nextForm} prevForm={prevForm} />}
                    {panDetails && <PANInfoForm panInfoRules={panDetails} nextForm={nextForm} prevForm={prevForm} />}
                    {aadharDetails && <AdhaarInfoForm aadharInfoRules={aadharDetails} nextForm={nextForm} prevForm={prevForm} />}
                    {agreementDetails && <AgreementInfoForm agreementInfoRules={agreementDetails} nextForm={nextForm} prevForm={prevForm} />}
                    {bankDetails && <FinancialInfoForm financialInfoRules={bankDetails} nextForm={nextForm} prevForm={prevForm} />}
                    {(() => {
                        'use strict'

                        // Fetch all the forms we want to apply custom Bootstrap validation styles to
                        const forms = document.querySelectorAll('.needs-validation')

                        // Loop over them and prevent submission
                        Array.from(forms).forEach(form => {
                            form.addEventListener('submit', event => {
                                if (!form.checkValidity()) {
                                    event.preventDefault()
                                    event.stopPropagation()
                                }

                                form.classList.add('was-validated')
                            }, false)
                        })
                    })()}
                </div>
            </div>
        </div >
    )
}

export default Dashboard;