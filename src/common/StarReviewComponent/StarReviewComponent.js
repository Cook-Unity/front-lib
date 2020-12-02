import React from 'react'

import StarRatingComponent from 'react-star-rating-controlled-component'

import styles from './StarReviewComponent.module.scss'

const StarReviewComponent = ({onStarClick, value, ...props}) => {
  return (
    <div className={styles.starReviewComponent}>
      <StarRatingComponent
        {...props}
        value={+value}
        onStarClick={(nextValue, prevValue, name, e) => {
          // this is for support half star rating values
          // const xPos =
          //   (e.pageX - e.currentTarget.getBoundingClientRect().left) /
          //   e.currentTarget.offsetWidth

          // if (xPos <= 0.5) {
          //   nextValue -= 0.5
          // }
          onStarClick(nextValue, prevValue, name, e)
        }}
        renderStarIcon={(index, value) =>
          index <= value ? (
            <div className={styles.star} />
          ) : (
            <div className={styles.emptyStar} />
          )
        }
        renderStarIconHalf={(index, value) => (
          <div className={styles.halfStar} />
        )}
      />
    </div>
  )
}

export default StarReviewComponent
