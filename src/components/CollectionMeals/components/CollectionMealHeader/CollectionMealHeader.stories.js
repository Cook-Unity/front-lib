import React from 'react'

import CollectionMealHeader from './index'
import {IMAGE_COLLECTION} from '../../constants'

export default {
  title: 'CollectionMeals/CollectionMealHeader',
  component: CollectionMealHeader,
  parameters: {
    layout: 'fullscreen'
  }
}

const Template = args => <CollectionMealHeader {...args} />

export const Required = Template.bind({})
Required.args = {
  title: 'New This Week',
  image: IMAGE_COLLECTION,
  description:
    'Every week we show you the new dishes made by our chefs. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  countMeals: 8
}

export const Full = Template.bind({})
Full.args = {
  title: 'New This Week',
  description:
    'Every week we show you the new dishes made by our chefs. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  image: IMAGE_COLLECTION,
  countMeals: 8,
  backgroundColor: '#F6E1D6',
  updatedWeekly: true
}
