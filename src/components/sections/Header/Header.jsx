import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import './Header.css'
import Nav from '../../Nav/Nav'
import Search from '../../Search/Search'

export default function Header() {
  const [sticky, setSticky] = useState(false)
  const [offset, setOffset] = useState(0)
  const header = useRef(null)
  const headerClass = classNames({ 'ht-header': true, sticky })

  const scrollFunc = () => {
    const headerHeight = header.current.clientHeight

    if (offset > headerHeight) {
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

  return (
    <header ref={header} className={headerClass}>
      <div className="container">
        <Nav />
        <Search />
      </div>
    </header>
  )
}
