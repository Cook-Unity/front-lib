import React from 'react'
import mock from './__mock__.json'

import RatingMeal from './index'

const defaultProps = {
  stars: mock.stars,
  reviewsCount: mock.reviewsCount,
  userRating: mock.userRating
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
