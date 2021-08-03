import React from 'react'
import Hamburger from '../Hamburger/Hamburger'

export default function LogoSection() {
  return (
    <div className="navbar-header logo">
      <Hamburger />
      <a href={'#'}>
        <img
          className="logo"
          src="https://firebasestorage.googleapis.com/v0/b/block-buster-71db3.appspot.com/o/logo1.png?alt=media&token=1b30de0b-3bdf-4902-ae6e-37c3f27c49f1"
          alt=""
          width="119"
          height="58"
        />
      </a>
    </div>
  )
}
