import React from 'react'

import Reviews from './index'
import {reviews} from './__mock__'

export default {
  title: 'Reviews',
  component: Reviews
}

const Template = args => <Reviews {...args} />

export const Default = Template.bind({})
Default.args = {
  isChef: false,
  product: {
    stars: 3
  },
  quantity: 298,
  reviews
}
