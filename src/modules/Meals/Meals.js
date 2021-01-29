import React, {useState, useCallback} from 'react'
import PropTypes from 'prop-types'

import MealCard from '../../components/MealCard'
import styles from './Meals.module.scss'

const SHOW_FIRST = 12

const MealsList = ({meals, title, subtitle}) => {
  const [viewMore, setViewMore] = useState(false)
  const mealsReduce = viewMore ? meals : meals.slice(0, SHOW_FIRST)

  const handleOnCLick = useCallback(() => {
    setViewMore(!viewMore)
  }, [setViewMore, viewMore])

  return (
    <>
      {title && (
        <>
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </>
      )}
      <div className={styles.meals}>
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
    </>
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
