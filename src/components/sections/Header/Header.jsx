import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import './Header.css'
import Nav from '../../Nav/Nav'
import Search from '../../Search/Search'

export default function Header() {
  const [sticky, setSticky] = useState(false)
  const [offset, setOffset] = useState(0)

  const scrollFunc = () => {
    if (offset > 165) {
      setSticky(true)
    } else {
      setSticky(false)
    }
    setOffset(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollFunc)

    return () => {
      window.removeEventListener('scroll', scrollFunc)
    }
  }, [offset])

  const headerClass = classNames({ 'ht-header': true, sticky })

  return (
    <header className={headerClass}>
      <div className="container">
        <Nav />
        <Search />
      </div>
    </header>
  )
}
