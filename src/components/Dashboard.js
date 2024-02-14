import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Dashboard = () => {
    const percentage = 66;

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
                    <div className="upload">Personal Information
                        <button type="button" className="btn btn-primary align-right">Upload</button>
                    </div>
                    <div className="upload">Education
                        <button type="button" className="btn btn-primary align-right">Upload</button>
                    </div>
                    <div className="upload">PAN Card
                        <button type="button" className="btn btn-primary align-right">Upload</button>
                    </div>
                    <div className="upload">Aadhar Card
                        <button type="button" className="btn btn-primary align-right">Upload</button>
                    </div>
                    <div className="upload">Agreement Form
                        <button type="button" className="btn btn-primary align-right">Upload</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;