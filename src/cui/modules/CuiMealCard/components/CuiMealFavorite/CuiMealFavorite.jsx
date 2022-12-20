import classNames from 'classnames'
import React from 'react'
import CuiIcon from '../../../../components/CuiIcon/CuiIcon'
import './CuiMealFavorite.scss'

const CuiMealFavorite = ({checked, ...props}) => {
  return (
    <div className="cui-meal-favorite" {...props}>
      <CuiIcon
        name={checked ? 'heartFilled' : 'heart'}
        role="button"
        className={classNames('cui-meal-favorite-icon')}
      />
    </div>
  )
}

export default CuiMealFavorite
