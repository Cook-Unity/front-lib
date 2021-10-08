import React from 'react'

import CollectionMealIcon from './index'
import {IMAGE_COLLECTION} from '../../constants'

export default {
  title: 'CollectionMeals/CollectionMealIcon',
  component: CollectionMealIcon
}

const Template = args => <CollectionMealIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'New This Week',
  image: IMAGE_COLLECTION
}

export const Small = Template.bind({})
Small.args = {
  title: 'New This Week',
  size: 'small',
  image: IMAGE_COLLECTION,
  backgroundColor: '#F6E1D6',
  updatedWeekly: true
}

export const Large = Template.bind({})
Large.args = {
  title: 'Plant Based Asian',
  image: IMAGE_COLLECTION,
  size: 'large',
  backgroundColor: '#D9EDFE',
  updatedWeekly: true
}
