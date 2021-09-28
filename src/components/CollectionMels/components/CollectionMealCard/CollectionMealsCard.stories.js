import React from 'react'

import CollectionMealsCard from './index'

export default {
  title: 'CollectionMealsCard',
  component: CollectionMealsCard
}

const IMAGE =
  'https://d1ureao5dcqpo4.cloudfront.net/media/merchandiseSets/chef-akhtar-chicken-tinga-tacos.jpg'

const Template = args => <CollectionMealsCard {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'New This Week',
  image: IMAGE
}

export const Small = Template.bind({})
Small.args = {
  title: 'From the Sea',
  size: 'small',
  image: IMAGE,
  backgroundColor: '#F6E1D6',
  updatedWeekly: true
}

export const Large = Template.bind({})
Large.args = {
  title: 'Plant Based Asian',
  image: IMAGE,
  size: 'large',
  backgroundColor: '#D9EDFE',
  updatedWeekly: true
}
