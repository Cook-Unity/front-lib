import React from 'react'
import PropTypes from 'prop-types'

import ChefInfo from '../ChefInfo'
import Meals from '../Meals'
import Reviews from '../Reviews'

// import styles from './ChefPage.module.scss'

const ChefPage = ({chef, meals, reviews, reviews_count}) => {
  return (
    <div className="chef-page">
      <ChefInfo chef={chef} />
      <Meals meals={meals} title={chef.firstname} subtitle="Available Now" />
      <Reviews
        reviews={reviews}
        product={{stars: chef.stars}}
        quantity={reviews.length}
        isChef
      />
    </div>
  )
}

ChefPage.propTypes = {
  chef: PropTypes.object,
  meals: PropTypes.arrayOf(PropTypes.object),
  reviews: PropTypes.arrayOf(PropTypes.object)
}

ChefPage.defaultProps = {
  chef: {},
  meals: [],
  reviews: []
}

export default ChefPage
