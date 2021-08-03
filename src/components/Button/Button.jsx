import React from 'react'
import './Button.css'
import ClassNames from 'classnames'
import PropsTypes from 'prop-types'

export default function Button({ text }) {
  const btnClass = ClassNames('btn')

  return (
    <button type={'button'} className={btnClass}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropsTypes.string,
}
