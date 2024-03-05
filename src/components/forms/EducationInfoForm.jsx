import React, { useState } from 'react';


const EducationInfoForm = (props) => {
    const { educationalInfoRules, nextForm, prevForm } = props;
    const [formData, setFormData] = useState({});

    function handleFormData(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <form className="form-container" id="form-1" onSubmit={(e) => nextForm(e, 1, formData)} style={{ display: "none" }}>
            <p className='h1'>Education</p>

            {educationalInfoRules.map((ele) => {
                return (ele.field === 'TEXT_INPUT') ? (
                    <div className="mb-3">
                        <label className="form-label fw-bold">{ele.data.label}</label>
                        <input type={ele.data.keyboardType == 'numeric' ? 'number' : 'text'} className="form-control" name={ele.data.name} maxLength={ele.data.maxLength} placeholder={ele.data.placeHolder} onChange={(e) => handleFormData(e)} required={ele.data.isRequired} />
                        <p className='text-danger small'>{ele.data.badMessage}</p>
                    </div>
                ) : (ele.field === 'SUBHEADING') ? (<p className='h6 text-success'>{ele.data.label}</p>) : null;
            })}

            <button type="button" className="btn btn-danger" onClick={(e) => prevForm(e, 1)}>Back</button>
            <button type="submit" className="btn btn-primary">Next</button>
        </form>
    )
}

export default EducationInfoForm;