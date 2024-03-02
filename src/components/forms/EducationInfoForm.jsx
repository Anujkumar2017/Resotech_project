import React from 'react';


const EducationInfoForm = (props) => {
    const { educationalInfoRules, nextForm, prevForm } = props;
    return (
        <form className="form-container" id="form-1" style={{ display: "none" }}>
            {/* <img className='cross-image' height="20px" width="20px" src={Cross} alt="cross" onClick={closeForm} /> */}
            <p className='h1'>Education</p>

            {educationalInfoRules.map((ele) => {
                return (ele.field === 'TEXT_INPUT') ? (
                    <div className="mb-3 fw-bold">
                        <label className="form-label">{ele.data.label}</label>
                        <input type='text' className="form-control" name={ele.data.name} maxLength={ele.data.maxLength} placeholder={ele.data.placeholder} required={ele.data.isRequired} />
                    </div>
                ) : (ele.field === 'SUBHEADING') ? (<p className='h6 text-danger'>{ele.data.label}</p>) : null;
            })}

            <button type="button" className="btn btn-danger" onClick={(e) => prevForm(e, 1)}>Back</button>
            <button type="submit" className="btn btn-primary" onClick={(e) => nextForm(e, 1)}>Next</button>
        </form>
    )
}

export default EducationInfoForm;