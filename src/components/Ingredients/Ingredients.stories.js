import React from 'react'

import Ingredients from './index'
import {ingredients} from './data.mock'

export default {
  title: 'Ingredients',
  component: Ingredients
}

const Template = args => <Ingredients {...args} />

export const Default = Template.bind({})
Default.args = {
  ingredients
}

export const IsLoading = Template.bind({})
IsLoading.args = {
  ingredients,
  isLoading: true
}

export const WithoutDetails = Template.bind({})
WithoutDetails.args = {
  ingredients,
  withDetails: false
}
