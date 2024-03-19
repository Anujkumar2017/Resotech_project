import axios from 'axios';
import React, { useState } from 'react';
import { Slide, toast } from 'react-toastify';

const AgreementInfoForm = (props) => {
    const { agreementInfoRules, nextForm, prevForm } = props;
    const [formData, setFormData] = useState({});

    async function handleUpload(e) {
        try {
            const response = await axios.post('https://appdev.resotechsolutions.in/onboarding/upload-document', {
                file: e.target.files[0],
                name: e.target.name,
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'token': localStorage.getItem('token')
                }
            });

            const data = response.data;
            console.log(data);

            // Valid Token
            if (data.status.statusCode == 1) {
                console.log("File Uploaded!");
                setFormData({
                    ...formData,
                    'path': data.data,
                    'name': 'agreement',
                })
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
        <form className="form-container needs-validation" id="form-4" onSubmit={(e) => nextForm(e, 4, formData)} style={{ display: "none" }} noValidate>
            <h1>Agreement Form</h1>

            {agreementInfoRules.map((ele) => {
                return (ele.field === "DOWNLOAD_BUTTON") ? (
                    <a className="btn btn-outline-primary mb-3 mt-3 fw-bold"
                        href={ele.data.url} download={ele.data.fileName} target='_blank'>
                        {ele.data.title}
                    </a>
                ) : (ele.field === "PARAGRAPH") ? (
                    <p>{ele.data.description}</p>
                ) : (ele.field === "INFORMATION") ? (
                    <div className="fw-bold">
                        <label className="form-label">{ele.data.title}</label>
                        <p className='fw-normal small stick-to-title'>{ele.data.description}</p>
                    </div>
                ) : (ele.field === "UPLOAD_BUTTON") ? (
                    <div>
                        <input type="file" className="form-control mb-3" name={ele.data.name} required={ele.data.isRequired} onChange={(e) => handleUpload(e)} />
                        <p className='text-danger small stick-to-title invalid-feedback'>{ele.data.badMessage}</p>
                    </div>
                ) : null;
            })}

            <button type="button" className="btn btn-danger" onClick={(e) => prevForm(e, 4)}>Back</button>
            <button type="submit" className="btn btn-primary">Next</button>
        </form>
    )
}

export default AgreementInfoForm;