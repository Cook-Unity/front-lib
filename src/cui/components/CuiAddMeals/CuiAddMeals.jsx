import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Button from '../CuiButton/CuiButton'
import {MEAL_STATUS, ORDER_STATUS} from './constants'
import './CuiAddMeals.scss'

const CuiAddMeals = ({
  size = 'small',
  color = 'primary',
  loading = false,
  mealName,
  mealPhoto,
  weeks,
  subtitle,
  description,
  addCallback,
  unskipAndAddCallback,
  className,
  ...props
}) => {
  return <div className={classNames(
    'cui-addmeals',
    `cui-addmeals-${color}`,
    `cui-addmeals-${size}`,
    loading && `cui-addmeals-${color}-loading`,
    className
  )} {...props}>
    <div className="cui-addmeals-header">
      <img className="cui-addmeals-photo" src={mealPhoto} />
      <div className="cui-addmeals-title-wrapper">
        <div className="cui-addmeals-subtitle">{subtitle}</div>
        <div className="cui-addmeals-title">{mealName}</div>
      </div>
    </div>
    <div className="cui-addmeals-description">{description}</div>
    <div className="cui-addmeals-date-wrapper">
      {weeks.map((week) => {
      const {date, orderStatus, mealStatus} = week

      return <div className={`cui-addmeals-datebox cui-addmeals-datebox-${mealStatus}`}>
        <div className="cui-addmeals-date">{date}</div>
        {
          mealStatus === MEAL_STATUS.AVAILABLE
          && (orderStatus === ORDER_STATUS.SCHEDULED)
          && <Button color="primary" fill="outline" size="medium" type="button" onClick={() => addCallback(date)}>+ Add to order</Button>}
        {
         mealStatus === MEAL_STATUS.AVAILABLE
          && (orderStatus === ORDER_STATUS.SKIP)
          && <Button color="primary" fill="outline" size="medium" type="button" onClick={() => unskipAndAddCallback(date)}>Unskip & Add</Button>}
        {
          mealStatus === MEAL_STATUS.AVAILABLE
          && (orderStatus === ORDER_STATUS.CONFIRMED)
          && <div className={`cui-addmeals-status cui-addmeals-status-${mealStatus}`}>ORDER PROCESSED</div>}
        {
          mealStatus === MEAL_STATUS.ADDED
          && (orderStatus === ORDER_STATUS.SCHEDULED)
          && <div className={`cui-addmeals-status cui-addmeals-status-${mealStatus}`}>ADDED</div>}
        {
          mealStatus === MEAL_STATUS.NOT_AVAILABLE
          && (orderStatus === ORDER_STATUS.SCHEDULED || orderStatus === ORDER_STATUS.CONFIRMED || orderStatus === ORDER_STATUS.SKIP)
          && <div className={`cui-addmeals-status cui-addmeals-status-${mealStatus}`}>SOLD OUT</div>}
      </div>
    })}
    </div>
  </div>
}

CuiAddMeals.defaultProps = {
  description: 'You can add this dish to any one of your upcoming orders, even if you skipped it.',
  subtitle: 'ADD TO ORDER:',
  addCallback: null,
  unskipAndAddCallback: null
}

CuiAddMeals.propTypes = {
  mealName: PropTypes.string.isRequired,
  mealPhoto: PropTypes.string.isRequired,
  weeks: PropTypes.shape({
    date: PropTypes.string.isRequired,
    orderStatus: PropTypes.string.isRequired,
    mealStatus: PropTypes.string.isRequired,
  }),
  description: PropTypes.string,
  subtitle: PropTypes.string,
  addCallback: PropTypes.func,
  unskipAndAddCallback: PropTypes.func
}
export default CuiAddMeals
