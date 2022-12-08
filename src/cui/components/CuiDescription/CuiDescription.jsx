import classNames from 'classnames'
import React from 'react'
import './CuiDescription.scss'

const CuiDescription = ({title, text, className, color = 'dark', ...props}) => {
  return (
    <div
      className={classNames('cui-description', `cui-color-${color}`, className)}
      {...props}
    >
      <div className="cui-description__title">{title}</div>
      <div className="cui-description__text">{text}</div>
    </div>
  )
}

export default CuiDescription
