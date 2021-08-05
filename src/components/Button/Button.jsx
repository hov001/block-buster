import React from 'react'
import './Button.css'
import PropsTypes from 'prop-types'

export default function Button({ text, classes }) {
  return (
    <button type={'button'} className={classes}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropsTypes.string,
  classes: PropsTypes.string,
}
