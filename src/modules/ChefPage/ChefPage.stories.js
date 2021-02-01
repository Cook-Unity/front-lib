import React from 'react'
import ChefPage from './'

import {chef, celebrity_chef, meals, reviews} from './__mock__'

export default {
  title: 'ChefPage',
  component: ChefPage
}

const Template = args => {
  return <ChefPage {...args} />
}

export const Default = Template.bind({})
Default.args = {
  chef,
  meals,
  reviews
}

export const CelebrityChef = Template.bind({})
CelebrityChef.args = {
  chef: celebrity_chef,
  meals,
  reviews
}

export const NoReviews = Template.bind({})
NoReviews.args = {
  chef: celebrity_chef,
  meals
}
