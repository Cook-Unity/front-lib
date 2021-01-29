import React from 'react'

import {reviews} from './__mock__'
import Reviews from './components/ReviewsUseCase'

export default {
  title: 'Reviews',
  component: Reviews
}

const Template = args => <Reviews {...args} />

export const Default = Template.bind({})
Default.args = {
  reviews,
  isChef: false,
  quantity: 298,
  product: {
    stars: 3
  }
}
