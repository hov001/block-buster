import React from 'react'
import './CheckboxField.css'
import PropsTypes from 'prop-types'

export default function CheckboxField({ name, value }) {
  return (
    <div>
      <input type="checkbox" name={name} value={value} />
      <span>{value}</span>
    </div>
  )
}

CheckboxField.propTypes = {
  name: PropsTypes.string,
  value: PropsTypes.string,
}
