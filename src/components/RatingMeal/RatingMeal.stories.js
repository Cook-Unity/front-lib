import React from 'react'
import {basic, full} from './__mock__'

import RatingMeal from './index'

export default {
  title: 'RatingMeal',
  component: RatingMeal
}

const Template = args => <RatingMeal {...args} />

export const Default = Template.bind({})
Default.args = {}

export const NoUserRating = Template.bind({})
NoUserRating.args = {
  ...basic
}

export const Full = Template.bind({})
Full.args = {
  ...full
}
