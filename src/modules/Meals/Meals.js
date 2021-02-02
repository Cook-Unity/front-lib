import React, {Fragment, useState, useCallback} from 'react'
import PropTypes from 'prop-types'

import MealCard from '../../components/MealCard'
import styles from './Meals.module.scss'

const SHOW_FIRST = 12

const Meals = ({meals, title, subtitle}) => {
  meals = meals || []
  const [viewMore, setViewMore] = useState(false)
  const mealsReduce = viewMore ? meals : meals.slice(0, SHOW_FIRST)

  const handleOnCLick = useCallback(() => {
    setViewMore(!viewMore)
  }, [setViewMore, viewMore])

  return (
    (meals.length && (
      <div>
        {title && (
          <Fragment>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
          </Fragment>
        )}
        <div className={styles.meals}>
          {mealsReduce.map((meal, i) => (
            <MealCard key={i} meal={meal} isEditable={false} />
          ))}
        </div>
        {meals.length > SHOW_FIRST && (
          <button
            className={styles['view-more']}
            type="button"
            onClick={handleOnCLick}
          >
            {viewMore ? 'View less' : 'View all Meals'}
          </button>
        )}
      </div>
    )) ||
    null
  )
}

Meals.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string
}

Meals.defaultProps = {
  meals: [],
  title: null,
  subtitle: null
}

export default Meals
