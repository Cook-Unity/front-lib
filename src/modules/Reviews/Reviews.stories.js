import React from 'react'

import {reviews} from './__mock__'
import ReviewsBasic from './components/ReviewsBasic'

export default {
  title: 'Reviews',
  component: ReviewsBasic
}

const Template = args => <ReviewsBasic {...args} />

export const Default = Template.bind({})
Default.args = {
  reviews,
  isChef: false,
  quantity: 298,
  product: {
    stars: 3
  }
}
