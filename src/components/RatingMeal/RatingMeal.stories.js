import React from 'react'
import mock from './__mock__.json'

import RatingMeal from './index'

const defaultProps = {
  stars: mock.stars,
  reviewsCount: mock.reviews_count,
  userRating: mock.user_rating
}

export default {
  title: 'RatingMeal',
  component: RatingMeal
}

const Template = args => <RatingMeal {...args} />

export const Default = Template.bind({})
Default.args = {
  ...defaultProps
}
