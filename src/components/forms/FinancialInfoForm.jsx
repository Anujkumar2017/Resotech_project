import React from 'react';

const FinancialInfoForm = (props) => {
    const { financialInfoRules, nextForm, prevForm } = props;
    return (
        <form className="form-container" id="form-5" style={{ display: "none" }}>
            <img className='cross-image' height="20px" width="20px" src={Cross} alt="cross" onClick={closeForm} />
            <h1>Financial Form</h1>

            {financialInfoRules.map((ele) => {
                return (ele.field === "TEXT_INPUT") ? (
                    <div className="mb-3 fw-bold">
                        <label className="form-label">{ele.data.label}</label>
                        <input type="text" className="form-control" maxLength={ele.data.maxLength} name={ele.data.name} placeholder={ele.data.placeholder} required={ele.data.isRequired} />
                    </div>
                ) : (ele.field === "INFORMATION") ? (
                    <div className="fw-bold">
                        <label className="form-label">{ele.data.title}</label>
                        <p className='fw-normal small stick-to-title'>{ele.data.description}</p>
                    </div>
                ) : (ele.field === "UPLOAD_BUTTON") ? (
                    <input type="file" className="form-control mb-3" name={ele.data.name} required={ele.required} />
                ) : null;
            })}

            <button type="button" className="btn btn-danger" onClick={(e) => prevForm(e, 5)}>Back</button>
            <button type="submit" className="btn btn-primary" onClick={(e) => nextForm(e, 5)}>Next</button>
        </form>
    )
}

export default FinancialInfoForm;