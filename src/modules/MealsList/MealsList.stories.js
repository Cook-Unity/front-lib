import React from 'react'
import MealsList from './'

import {meals} from './__mock__'

export default {
  title: 'MealsList',
  component: MealsList
}

const Template = args => <MealsList {...args} />

export const Default = Template.bind({})
Default.args = {
  meals
}

export const WithTitle = Template.bind({})
WithTitle.args = {
  meals,
  title: 'Meals',
  subtitle: 'Only the best'
}
