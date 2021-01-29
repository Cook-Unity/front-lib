import React from 'react'
import ReviewList from './index'

import {reviews} from '../../__mock__'

export default {
  title: 'ReviewList',
  component: ReviewList
}

const Template = args => <ReviewList {...args} />

export const Default = Template.bind({})
Default.args = {
  reviews,
  max: 6
}

export const NoViewMore = Template.bind({})
NoViewMore.args = {
  reviews: reviews.slice(0, 3)
}
