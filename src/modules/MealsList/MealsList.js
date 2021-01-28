import React, {useState, useCallback} from 'react'
import PropTypes from 'prop-types'

import MealCard from '../../components/MealCard'
import styles from './MealsList.module.scss'

const SHOW_FIRST = 8

const MealsList = ({meals, title, subtitle}) => {
  const [viewMore, setViewMore] = useState(false)
  const mealsReduce = viewMore ? meals : meals.slice(0, SHOW_FIRST)

  const handleOnCLick = useCallback(() => {
    setViewMore(!viewMore)
  }, [setViewMore, viewMore])

  return (
    <div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <div className={styles['meals-list']}>
        {meals &&
          mealsReduce.map((meal, i) => (
            <MealCard key={i} meal={meal} isEditable={false} />
          ))}
      </div>
      {meals && meals.length > SHOW_FIRST && (
        <button
          className={styles['view-more']}
          type="button"
          onClick={handleOnCLick}
        >
          {viewMore ? 'View less' : 'View all Meals'}
        </button>
      )}
    </div>
  )
}

MealsList.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string
}

MealsList.defaultProps = {
  meals: [{}],
  title: null,
  subtitle: null
}

export default MealsList
