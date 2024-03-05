import React from 'react';

const AdhaarInfoForm = (props) => {
    const { aadharInfoRules, nextForm, prevForm } = props;
    return (
        <form className="form-container" id="form-3" onSubmit={(e) => nextForm(e, 3)} style={{ display: "none" }}>
            <p className='h1'>Aadhar Card</p>

            {aadharInfoRules.map((ele) => {
                return (ele.field === 'TEXT_INPUT') ? (
                    <div className="mb-3">
                        <label className="form-label fw-bold">{ele.data.label}</label>
                        <input type="text" className="form-control" name={ele.data.name} maxLength={ele.data.maxLength} placeholder={ele.data.placeHolder} required={ele.data.isRequired} />
                        <p className='text-danger small'>{ele.data.badMessage}</p>
                    </div>
                ) : (ele.field === 'INFORMATION') ? (
                    <div className="mb-3 fw-bold">
                        <label className="form-label">{ele.data.title}</label>
                        <p className='fw-normal small stick-to-title'>{ele.data.description}</p>
                    </div>
                ) : (ele.field === "UPLOAD_BUTTON") ? (
                    <>
                        <input type="file" className="form-control mb-3" name={ele.data.name} required={ele.data.isRequired} />
                        <p className='text-danger small stick-to-title'>{ele.data.badMessage}</p>
                    </>
                ) : null;
            })}

            <button type="button" className="btn btn-danger" onClick={(e) => prevForm(e, 3)}>Back</button>
            <button type="submit" className="btn btn-primary">Next</button>
        </form>
    )
}

export default AdhaarInfoForm