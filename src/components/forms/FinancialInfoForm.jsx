import axios from 'axios';
import React, { useState } from 'react';
import { Slide, toast } from 'react-toastify';

const FinancialInfoForm = (props) => {
    const { financialInfoRules, nextForm, prevForm } = props;
    const [formData, setFormData] = useState({});

    function handleFormData(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
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
                    'bank': data.data,
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
        <form className="form-container needs-validation" id="form-5" onSubmit={(e) => nextForm(e, 5, formData)} style={{ display: "none" }} noValidate>
            <h1>Financial Form</h1>

            {financialInfoRules.map((ele) => {
                return (ele.field === "TEXT_INPUT") ? (
                    <div className="mb-3">
                        <label className="form-label fw-bold">{ele.data.label}</label>
                        <input type={ele.data.keyboardType == 'numeric' ? 'number' : 'text'}
                            min={ele.data.keyboardType == 'numeric' && (ele.data.label == 'A/C Number') ? 10000000000 : null}
                            style={(ele.data.name == 'ifscCode') ? { textTransform: 'uppercase' } : null}
                            className="form-control" maxLength={ele.data.maxLength} name={ele.data.name} placeholder={ele.data.placeHolder} required={ele.data.isRequired} onChange={(e) => handleFormData(e)} />
                        <p className='text-danger small invalid-feedback'>{ele.data.badMessage}</p>
                    </div>
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

            <button type="button" className="btn btn-danger" onClick={(e) => prevForm(e, 5)}>Back</button>
            <button type="submit" className="btn btn-primary">Next</button>
        </form>
    )
}

export default FinancialInfoForm;