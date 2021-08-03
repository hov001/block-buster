import React from 'react'
import './Nav.css'
import LogoSection from '../LogoSection/LogoSection'
import Button from '../Button/Button'

export default function Nav() {
  return (
    <nav className="navbar navbar-default navbar-custom">
      <LogoSection />
      <div
        className="collapse navbar-collapse flex-parent"
        id="bs-example-navbar-collapse-1"
      >
        <ul className="nav navbar-nav flex-child-menu menu-left">
          <li className="first">
            <a href="#">Movies</a>
          </li>
        </ul>
        <ul className="nav navbar-nav flex-child-menu menu-right">
          <li>
            <a href="#">Favorites</a>
          </li>
          <li>
            <a href="#">Log in</a>
          </li>
          <li>
            <Button text={'Sign up'} />
          </li>
        </ul>
      </div>
    </nav>
  )
}
