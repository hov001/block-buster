import React from 'react'
import './Search.css'
import ClassNames from 'classnames'

export default function Search() {
  const searchClass = ClassNames('search')

  return (
    <div className={searchClass}>
      <select>
        <option value="united">TV show</option>
        <option value="saab">Others</option>
      </select>
      <input
        type="text"
        placeholder="Search for a movie, TV Show or celebrity that you are looking for"
      />
    </div>
  )
}
