import React from 'react'
import './Card.css'
import ClassNames from 'classnames'
import PropsTypes from 'prop-types'
import Button from '../Button/Button'

export default function Card({ name, imgLink, readMore, averageRate }) {
  const cardClass = ClassNames('movie-item-style-2', 'movie-item-style-1')
  const readMoreClass = ClassNames('hvr-inner')
  const cardInfoClass = ClassNames('mv-item-infor')
  const rate = ClassNames('rate')

  return (
    <div className={cardClass}>
      <img src={imgLink} alt={name} />
      <div className={readMoreClass}>
        <Button text={'Read more'} />
      </div>
      <div className={cardInfoClass}>
        <h6>
          <a href={readMore}>{name}</a>
        </h6>
        <p className={rate}>
          <i className="ion-android-star" />
          <span>{averageRate}</span> /10
        </p>
      </div>
    </div>
  )
}

Card.propTypes = {
  name: PropsTypes.string,
  imgLink: PropsTypes.string,
  readMore: PropsTypes.string,
  averageRate: PropsTypes.string,
}
