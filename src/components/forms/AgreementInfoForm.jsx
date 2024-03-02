import React from 'react';

const AgreementInfoForm = (props) => {
    const { agreementInfoRules, nextForm, prevForm } = props;
    return (
        <form className="form-container" id="form-4" style={{ display: "none" }}>
            <h1>Agreement Form</h1>

            {agreementInfoRules.map((ele) => {
                return (ele.field === "DOWNLOAD_BUTTON") ? (
                    <a className="btn btn-outline-primary mb-3 mt-3 fw-bold" href="path_to_file"
                        download="Agreement_Form">
                        Download Agreement Form
                    </a>
                ) : (ele.field === "PARAGRAPH") ? (
                    <p>{ele.data.description}</p>
                ) : (ele.field === "INFORMATION") ? (
                    <div className="fw-bold">
                        <label className="form-label">{ele.data.title}</label>
                        <p className='fw-normal small stick-to-title'>{ele.data.description}</p>
                    </div>
                ) : (ele.field === "UPLOAD_BUTTON") ? (
                    <input type="file" className="form-control mb-3" name={ele.data.name} required={ele.required} />
                ) : null;
            })}

            <button type="button" className="btn btn-danger" onClick={(e) => prevForm(e, 4)}>Back</button>
            <button type="submit" className="btn btn-primary" onClick={(e) => nextForm(e, 4)}>Next</button>
        </form>
    )
}

export default AgreementInfoForm;