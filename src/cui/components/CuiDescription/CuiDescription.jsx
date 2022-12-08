import classNames from 'classnames'
import React from 'react'
import './CuiDescription.scss'

const CuiDescription = ({title, text, className, ...props}) => {
  return (
    <div className={classNames('cui-description', className)}>
      <div className="cui-description__title">{title}</div>
      <div className="cui-description__text">{text}</div>
    </div>
  )
}

export default CuiDescription
