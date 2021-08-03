import React from 'react'
import classNames from 'classnames'
import './Header.css'
import Nav from '../../Nav/Nav'

export default function Header() {
  const headerClass = classNames('ht-header')

  return (
    <header className={headerClass}>
      <div className="container">
        <Nav />
        <div className="top-search">
          <select>
            <option value="united">TV show</option>
            <option value="saab">Others</option>
          </select>
          <input
            type="text"
            placeholder="Search for a movie, TV Show or celebrity that you are looking for"
          />
        </div>
      </div>
    </header>
  )
}
