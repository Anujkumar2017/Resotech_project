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

const Dashboard = () => {

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
        }
        fetchData();
    }, []);

    const navigate = useNavigate();
    const [userData, setUserData] = useState({});

    /****** Personal Details form ******/
    let personalInfoRules = [
        {
            field: "TEXT_INPUT",
            data: {
                name: 'name',
                label: 'Name',
                placeholder: 'Enter Name',
                maxLength: 30,
                isRequired: true,
                badMessage: 'Enter a valid Name'
            }
        },
        {
            field: "DROPDOWN",
            data: {
                options: [
                    { label: 'Male', value: 'male' },
                    { label: 'Female', value: 'female' },
                    { label: 'Others', value: 'others' }
                ],
                name: 'gender',
                label: 'Gender',
                placeholder: 'Select Gender',
                isRequired: true,
                badMessage: 'Please select a gender'
            }
        },
        {
            field: "TEXT_INPUT",
            data: {
                name: 'contact',
                label: 'Contact No.',
                placeholder: 'Enter Contact No.',
                maxLength: 10,
                keyboardType: 'numeric',
                isRequired: true,
                badMessage: 'Enter a valid Contact No.'
            }
        },
        {
            field: "TEXT_INPUT",
            data: {
                name: 'address1',
                label: 'Address Line 1',
                placeholder: 'Enter House No. and Area',
                isRequired: true,
                badMessage: 'Please enter House No. and Area'
            }
        },
        {
            field: "TEXT_INPUT",
            data: {
                name: 'address2',
                label: 'Address Line 2',
                placeholder: 'Enter State',
                isRequired: true,
                badMessage: 'Please enter State'
            }
        },
        {
            field: "TEXT_INPUT",
            data: {
                name: 'pincode',
                label: 'Pin Code',
                placeholder: 'Enter Pincode',
                maxLength: 6,
                keyboardType: 'numeric',
                isRequired: true,
                badMessage: 'Please enter Pin Code'
            }
        },

    ];

    /****** Educational Qualifications  Form ******/
    let educationalInfoRules = [
        {
            field: 'SUBHEADING',
            data: {
                label: 'Graduation'
            }
        },
        {
            field: "TEXT_INPUT",
            data: {
                name: 'graduation',
                label: 'Degree Name',
                placeholder: 'Eg. B.Tech',
                maxLength: 30,
                badMessage: 'Enter a Degree Name'
            }
        },
        {
            field: "TEXT_INPUT",
            data: {
                name: 'graduationYear',
                label: 'Year of Completion',
                placeholder: 'Eg. 2019',
                keyboardType: 'numeric',
                maxLength: 4,
                badMessage: 'Enter a valid Year'
            }
        },
        {
            field: "TEXT_INPUT",
            data: {
                name: 'graduationInstitute',
                label: 'Institute Name',
                placeholder: 'Enter Institute Name',
                maxLength: 30,
                badMessage: 'Enter a valid Institute Name'
            }
        },
        {
            field: "TEXT_INPUT",
            data: {
                name: 'graduationCGPA',
                label: 'CGPA',
                placeholder: 'Eg 9.20',
                keyboardType: 'numeric',
                maxLength: 5,
                badMessage: 'Enter a valid CGPA'
            }
        },
        {
            field: 'SUBHEADING',
            data: {
                label: 'Secondary Education'
            }
        },
        {
            field: "TEXT_INPUT",
            data: {
                name: 'secondaryInstitute',
                label: 'Institute Name',
                placeholder: 'Enter Institute Name',
                maxLength: 30,
                isRequired: true,
                badMessage: 'Invalid Secondary Institution Name'
            }
        },
        {
            field: "TEXT_INPUT",
            data: {
                name: 'secondaryYear',
                label: 'Year of Completion',
                placeholder: 'Eg. 2019',
                maxLength: 4,
                keyboardType: 'numeric',
                isRequired: true,
                badMessage: 'Invalid secondary education passing year'
            }
        },
        {
            field: "TEXT_INPUT",
            data: {
                name: 'secondaryStream',
                label: 'Stream',
                placeholder: 'Eg. Science',
                maxLength: 30,
                isRequired: true,
                badMessage: 'Invalid stream name'
            }
        },
        {
            field: "TEXT_INPUT",
            data: {
                name: 'secondaryCGPA',
                label: 'CGPA',
                placeholder: 'Eg 9.20',
                maxLength: 5,
                keyboardType: 'numeric',
                isRequired: true,
                badMessage: 'Invalid secondary education CGPA'
            }
        },
    ];


    /****** PAN Details Form ******/
    let panInfoRules = [
        {
            field: "TEXT_INPUT",
            data: {
                name: 'panNumber',
                label: 'PAN Number',
                placeholder: 'Eg: QAXCE0891D',
                maxLength: 10,
                isRequired: true,
                badMessage: 'Invalid PAN Number'
            }
        },
        {
            field: "INFORMATION",
            data: {
                title: 'Upload PAN Card',
                description: '(.pdf, .jpg, .jpeg files only)'
            }
        },
        {
            field: "UPLOAD_BUTTON",
            data: {
                name: 'panUploadData',
                isRequired: true,
                badMessage: 'Please upload PAN Card'
            }
        },
    ];

    /****** Aadhar Details Form ******/
    let aadharInfoRules = [
        {
            field: "TEXT_INPUT",
            data: {
                name: 'aadharNumber',
                label: 'Aadhar Number',
                placeholder: 'Eg: 123456781234',
                maxLength: 12,
                isRequired: true,
                badMessage: 'Invalid Aadhar Number'
            }
        },
        {
            field: "INFORMATION",
            data: {
                title: 'Upload Aadhar',
                description: '(.pdf, .jpg, .jpeg files only)'
            }
        },
        {
            field: "UPLOAD_BUTTON",
            data: {
                name: 'aadharUploadData',
                isRequired: true,
                badMessage: 'Please upload Aadhar Card'
            }
        },
    ];

    /***** Agreement Info Form *****/
    let agreementInfoRules = [
        {
            field: "DOWNLOAD_BUTTON",
            data: {
                title: 'DOWNLOAD AGREEMENT FORM'
            }
        },
        {
            field: "PARAGRAPH",
            data: {
                description: 'Kindly download the Agreement Form, review and sign the Terms and Conditions, and then proceed to upload the document below.'
            }
        },
        {
            field: "INFORMATION",
            data: {
                title: 'Upload Signed Agreement Form',
                description: '(.pdf file only)'
            }
        },
        {
            field: "UPLOAD_BUTTON",
            data: {
                name: 'agreementUploadData',
                isRequired: true,
                badMessage: 'Please upload Agreement Form'
            }
        },
    ];

    /***** Financial Info Form *****/
    let financialInfoRules = [
        {
            field: "TEXT_INPUT",
            data: {
                name: 'bankName',
                label: 'Bank Name',
                placeholder: 'Eg. Kotak Mahindra Bank',
                maxLength: 30,
                isRequired: true,
                badMessage: 'Invalid bank name'
            }
        },
        {
            field: "TEXT_INPUT",
            data: {
                name: 'accountNumber',
                label: 'A/C Number',
                placeholder: 'Eg. 1234567890',
                maxLength: 30,
                isRequired: true,
                badMessage: 'Invalid account number'
            }
        },
        {
            field: "TEXT_INPUT",
            data: {
                name: 'bankIfsc',
                label: 'IFSC CODE',
                placeholder: 'Eg. KKMK1234',
                maxLength: 30,
                isRequired: true,
                badMessage: 'Invalid IFSC code'
            }
        },
        {
            field: "TEXT_INPUT",
            data: {
                name: 'bankBranch',
                label: 'Branch Name',
                placeholder: 'Eg. Shiv Nagar, New Delhi',
                maxLength: 30,
                isRequired: true,
                badMessage: 'Invalid Branch Name'
            }
        },
        {
            field: "INFORMATION",
            data: {
                title: 'Upload Cancelled Cheque',
                description: '(.pdf, .jpg, .jpeg files only)'
            }
        },
        {
            field: "UPLOAD_BUTTON",
            data: {
                name: 'financialUploadData',
                isRequired: true,
                badMessage: 'Please upload Cancelled Cheque'
            }
        },
    ];

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

                    <PresonalInfoForm personalInfoRules={personalInfoRules} nextForm={nextForm} />
                    <EducationInfoForm educationalInfoRules={educationalInfoRules} nextForm={nextForm} prevForm={prevForm} />
                    <PANInfoForm panInfoRules={panInfoRules} nextForm={nextForm} prevForm={prevForm} />
                    <AdhaarInfoForm aadharInfoRules={aadharInfoRules} nextForm={nextForm} prevForm={prevForm} />
                    <AgreementInfoForm agreementInfoRules={agreementInfoRules} nextForm={nextForm} prevForm={prevForm} />
                    <FinancialInfoForm financialInfoRules={financialInfoRules} nextForm={nextForm} prevForm={prevForm} />

                </div>
            </div>
        </div >
    )
}

export default Dashboard;