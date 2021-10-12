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

export const LongDescription = Template.bind({})
LongDescription.args = {
  title: 'New This Week',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  image: IMAGE_COLLECTION,
  countMeals: 8,
  backgroundColor: '#F6E1D6',
  updatedWeekly: true
}
