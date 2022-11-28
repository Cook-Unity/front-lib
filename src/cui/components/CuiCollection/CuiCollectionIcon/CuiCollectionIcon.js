import React from 'react'
import classnames from 'classnames'
import CuiTag from '../../CuiTag/CuiTag'

import './CuiCollectionIcon.scss'

const CuiCollectionIcon = ({
  image,
  title,
  size = 'large',
  handleOnClick,
  updatedWeekly,
  className
}) => {
  const showViewAll = size !== 'small'
  return (
    <div className={classnames('cui-collection-icon', className)}>
      <div className="cui-collection-icon__container" onClick={handleOnClick}>
        <img
          className="cui-collection-icon__img"
          src={image}
          alt="Collection icon"
        />
        <div className="cui-collection-icon__details">
          {updatedWeekly && (
            <CuiTag
              color="yellow"
              size="small"
              className="cui-collection-icon__tag"
            >
              UPDATED WEEKLY
            </CuiTag>
          )}
          <div className={`cui-collection-icon__title-${size}`}>{title}</div>
        </div>
      </div>
      {showViewAll && (
        <span className="cui-collection-icon__view-all" onClick={handleOnClick}>
          View all
        </span>
      )}
    </div>
  )
}

export default CuiCollectionIcon
