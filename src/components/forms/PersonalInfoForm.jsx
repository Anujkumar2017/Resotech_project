import React, { useState } from 'react';

const PersonalInfoForm = (props) => {
  const { personalInfoRules, nextForm } = props;
  const [formData, setFormData] = useState({});

  function handleFormData(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  
  return (
    <form className="form-container needs-validation" id="form-0" onSubmit={(e) => nextForm(e, 0, formData)} noValidate>
      <h1>Personal Information</h1>

      {personalInfoRules.map((ele) => {
        return (ele.field === 'TEXT_INPUT') ? (
          <div className="mb-3">
            <label className="form-label fw-bold">{ele.data.label}</label>
            <input type={ele.data.keyboardType == 'numeric' ? 'number' : 'text'} 
              min={ele.data.keyboardType == 'numeric' && (ele.data.label == 'Contact Number') ? 1000000000 : (ele.data.label == 'Pin Code') ? 100000 : null}
              max={(ele.data.keyboardType == 'numeric') && (ele.data.label == 'Contact Number') ? 9999999999 : (ele.data.label == 'Pin Code') ? 999999 : null} className="form-control" name={ele.data.name} maxLength={ele.data.maxLength} placeholder={ele.data.placeHolder} onChange={(e) => handleFormData(e)} required={ele.data.isRequired} />
            <p className='text-danger small invalid-feedback'>{ele.data.badMessage}</p>
          </div>) : (ele.field === 'DROPDOWN') ? (
            <>
              <label className="mb-3 fw-bold" >{ele.data.label}</label>
              <select className="form-control custom-select mb-3" name={ele.data.name} required={ele.data.isRequired} onChange={(e) => handleFormData(e)} >
                <option hidden disabled selected>Select Gender</option>
                {ele.data.options.map((option) => {
                  return <option value={option.value} >{option.label}</option>
                })}
              </select>
              <p className='text-danger small stick-to-title invalid-feedback'>{ele.data.badMessage}</p>
            </>) : null;
      })}

      <button type="submit" className="btn btn-primary">Next</button>
    </form>
  )
}

export default PersonalInfoForm;