import React from 'react'
import {fn} from '@storybook/test'
import CollectionMealIcon from './index'
import {IMAGE_COLLECTION} from '../../constants'

export default {
  title: 'CollectionMeals/CollectionMealIcon',
  component: CollectionMealIcon,
  args: {
    handleOnClick: fn()
  }
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
  size: 'large',
  image: IMAGE_COLLECTION,
  backgroundColor: '#D9EDFE',
  updatedWeekly: true
}
