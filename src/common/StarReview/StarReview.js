import React from 'react'

import StarRating from 'react-star-rating-controlled-component'

import styles from './StarReview.module.scss'

const StarReview = ({onStarClick = () => {}, value, ...props}) => {
  return (
    <div className={styles.starReview}>
      <StarRating
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

export default StarReview
