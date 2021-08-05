import React from 'react'
import './InputField.css'
import PropsTypes from 'prop-types'

export default function InputField({
  type,
  label,
  name,
  placeholder,
  required,
}) {
  return (
    <label htmlFor={name}>
      {label}
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
      />
    </label>
  )
}

InputField.propTypes = {
  type: PropsTypes.string,
  label: PropsTypes.string,
  name: PropsTypes.string,
  placeholder: PropsTypes.string,
  required: PropsTypes.bool,
}
