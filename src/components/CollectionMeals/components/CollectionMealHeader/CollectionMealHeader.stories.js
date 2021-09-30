import React from 'react'

import CollectionMealHeader from './index'
import {IMAGE_COLLECTION} from '../../constants'

export default {
  title: 'CollectionMealHeader',
  component: CollectionMealHeader
}

const Template = args => <CollectionMealHeader {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'New This Week',
  image: IMAGE_COLLECTION,
  countMeals: 8,
  backgroundColor: '#F6E1D6',
  updatedWeekly: true,
  description:
    'Every week we show you the new dishes made by our chefs. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}
