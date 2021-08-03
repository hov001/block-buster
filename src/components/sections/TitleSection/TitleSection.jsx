import React from 'react'
import './TitleSection.css'
import ClassNames from 'classnames'
import PropsTypes from 'prop-types'

export default function TitleSection({ text }) {
  const titleSectionClass = ClassNames('hero', 'common-hero')
  const sectionContainerClass = ClassNames('container')
  const sectionRowClass = ClassNames('row')
  const gridSection = ClassNames('col-md-12')
  const titleCenter = ClassNames('hero-ct')

  return (
    <div className={titleSectionClass}>
      <div className={sectionContainerClass}>
        <div className={sectionRowClass}>
          <div className={gridSection}>
            <div className={titleCenter}>
              <h1>{text}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

TitleSection.propTypes = {
  text: PropsTypes.string,
}
