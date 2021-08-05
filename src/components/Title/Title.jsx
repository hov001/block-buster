import React from 'react'
import './Title.css'
import PropsTypes from 'prop-types'

export default function Title({ text, color }) {
  return <h3 style={{ color }}>{text}</h3>
}

Title.propTypes = {
  text: PropsTypes.string,
  color: PropsTypes.string,
}
