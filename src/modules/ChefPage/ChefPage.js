import React from 'react'
import PropTypes from 'prop-types'

import ChefInfo from '../ChefInfo'
import MealsList from '../MealsList'
import Reviews from '../Reviews'

const ChefPage = ({chef, meals, reviews, reviews_count}) => {
  return (
    <div className="chef-page">
      <ChefInfo chef={chef} />
      <MealsList
        meals={meals}
        title={chef.firstname}
        subtitle="Available Now"
      />
      <Reviews
        reviews={reviews}
        product={{stars: chef.stars}}
        quantity={reviews_count}
        isChef
      />
    </div>
  )
}

ChefPage.propTypes = {
  chef: PropTypes.object,
  meals: PropTypes.arrayOf(PropTypes.object),
  reviews: PropTypes.arrayOf(PropTypes.object),
  reviews_count: PropTypes.number
}

ChefPage.defaultProps = {
  chef: {},
  meals: [],
  reviews: [],
  reviews_count: null
}

export default ChefPage
