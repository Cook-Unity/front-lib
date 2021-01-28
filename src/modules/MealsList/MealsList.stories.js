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

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
  meals,
  title: 'Meals'
}

export const Full = Template.bind({})
Full.args = {
  meals,
  title: 'Meals',
  subtitle: 'Available Now'
}
