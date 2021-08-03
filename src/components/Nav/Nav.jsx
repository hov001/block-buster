import React from 'react'
import './Nav.css'
import LogoSection from '../LogoSection/LogoSection'

export default function Nav() {
  return (
    <nav className="navbar navbar-default navbar-custom">
      <LogoSection />
      <div
        className="collapse navbar-collapse flex-parent"
        id="bs-example-navbar-collapse-1"
      >
        <ul className="nav navbar-nav flex-child-menu menu-left">
          <li className="dropdown first">
            <a
              className="btn btn-default dropdown-toggle lv1"
              data-toggle="dropdown"
            >
              Home
            </a>
          </li>
        </ul>
        <ul className="nav navbar-nav flex-child-menu menu-right">
          <li className="dropdown first">
            <a
              className="btn btn-default dropdown-toggle lv1"
              data-toggle="dropdown"
              data-hover="dropdown"
            >
              pages
            </a>
          </li>
          <li className="loginLink">
            <a href="#">LOG In</a>
          </li>
          <li className="btn signupLink">
            <a href="#">sign up</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
