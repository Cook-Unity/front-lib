import React from 'react'
import ChefPage from './'

import {chef, celebrity_chef, meals, reviews} from './__mock__'

export default {
  title: 'ChefPage',
  component: ChefPage
}

const share_url = 'https://www.cookunity.com/chef'

const Template = args => {
  return <ChefPage {...args} />
}

export const Default = Template.bind({})
Default.args = {
  chef,
  meals,
  reviews,
  share_url
}

export const CelebrityChef = Template.bind({})
CelebrityChef.args = {
  chef: celebrity_chef,
  meals,
  reviews,
  share_url
}

export const NoReviewsAndNoShare = Template.bind({})
NoReviewsAndNoShare.args = {
  chef: celebrity_chef,
  meals
}
