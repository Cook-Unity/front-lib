import React from 'react'
import ChefPage from './'

import {chef, meals, reviews} from './__mock__'

export default {
  title: 'ChefPage',
  component: ChefPage
}

const Template = args => {
  return <ChefPage {...args} />
}
console.log('reviews:', reviews)
export const Default = Template.bind({})
Default.args = {
  chef,
  meals,
  reviews,
  reviews_count: 125
}
