import React from 'react';


const EducationInfoForm = (props) => {
    const { educationalInfoRules, nextForm, prevForm } = props;
    return (
        <form className="form-container" id="form-1" onSubmit={(e) => nextForm(e, 1)} style={{ display: "none" }}>
            <p className='h1'>Education</p>

            {educationalInfoRules.map((ele) => {
                return (ele.field === 'TEXT_INPUT') ? (
                    <div className="mb-3">
                        <label className="form-label fw-bold">{ele.data.label}</label>
                        <input type='text' className="form-control" name={ele.data.name} maxLength={ele.data.maxLength} placeholder={ele.data.placeholder} required={ele.data.isRequired} />
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