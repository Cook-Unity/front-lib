import React from 'react'
import {fn} from '@storybook/test'

import CollectionMealsCard from './index'
import {IMAGE_COLLECTION} from '../../constants'

export default {
  title: 'CollectionMeals/CollectionMealCard',
  component: CollectionMealsCard,
  args: {
    handleOnClick: fn()
  }
}

const Template = args => <CollectionMealsCard {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'New',
  image: IMAGE_COLLECTION
}

export const Small = Template.bind({})
Small.args = {
  title: 'From the Sea',
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

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
  title: 'Plant Based Asian',
  image: IMAGE_COLLECTION,
  size: 'extra_large',
  backgroundColor: '#D9EDFE',
  updatedWeekly: true
}
