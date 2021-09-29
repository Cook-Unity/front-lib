import React from 'react'

import CollectionMealHeader from './index'

export default {
  title: 'CollectionMealHeader',
  component: CollectionMealHeader
}

const IMAGE =
  'https://d1ureao5dcqpo4.cloudfront.net/media/merchandiseSets/chef-akhtar-chicken-tinga-tacos.jpg'

const Template = args => <CollectionMealHeader {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'New This Week',
  image: IMAGE,
  backgroundColor: '#F6E1D6',
  updatedWeekly: true,
  description:
    'Every week we show you the new dishes made by our chefs. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}
