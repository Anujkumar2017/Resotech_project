import React, { useState } from 'react';

const PersonalInfoForm = (props) => {
  const { personalInfoRules, nextForm } = props;
  const [formData, setFormData] = useState({});

  function handleFormData(e)  {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      })
  }

  return (
    <form className="form-container" id="form-0" onSubmit={(e) => nextForm(e, 0, formData)}>
      <h1>Personal Information</h1>

      {personalInfoRules.map((ele) => {
        return (ele.field === 'TEXT_INPUT') ? (
          <div className="mb-3">
            <label className="form-label fw-bold">{ele.data.label}</label>
            <input type={ele.data.keyboardType == 'numeric' ? 'number': 'text'} className="form-control" name={ele.data.name} maxLength={ele.data.maxLength} placeholder={ele.data.placeHolder} onChange={(e)=>handleFormData(e)} required={ele.data.isRequired} />
            <p className='text-danger small'>{ele.data.badMessage}</p>
          </div>) : null;
        {/* </div>) : (ele.field === 'DROPDOWN') ? (
            <>
              <label className="mb-3 fw-bold" >{ele.data.label}</label>
              <select className="form-control custom-select mb-3" name={ele.data.name} required={ele.data.isRequired}>
                <option defaultValue="Select Gender">Select Gender</option>
                {ele.data.options.map((option) => {
                  return <option value={option.value} >{option.label}</option>
                })}
              </select>
              <p className='text-danger small stick-to-title'>{ele.data.badMessage}</p>
            </>) : null; */}
      })}

      <button type="submit" className="btn btn-primary">Next</button>
    </form>
  )
}

export default PersonalInfoForm;