import React from 'react';

const PersonalInfoForm = (props) => {
  const { personalInfoRules, nextForm} = props;

  return (
    <form className="form-container" id="form-0">
      <h1>Personal Information</h1>

      {personalInfoRules.map((ele) => {
        return (ele.field === 'TEXT_INPUT') ? (
          <div className="mb-3 fw-bold">
            <label className="form-label">{ele.data.label}</label>
            <input type='text' className="form-control" name={ele.data.name} maxLength={ele.data.maxLength} placeholder={ele.data.placeholder} required={ele.data.isRequired} />
          </div>) : (ele.field === 'DROPDOWN') ? (
            <>
              <label className="mb-3 fw-bold" >{ele.data.label}</label>
              <select className="form-control custom-select mb-3" name={ele.data.name} required={ele.data.isRequired}>
                <option defaultValue="Select Gender">Select Gender</option>
                {ele.data.options.map((option) => {
                  return <option value={option.value} >{option.label}</option>
                })}
              </select>
            </>) : null;
      })}

      <button type="submit" className="btn btn-primary" onClick={(e) => nextForm(e, 0)}>Next</button>
    </form>
  )
}

export default PersonalInfoForm;