import React from 'react'
import Meals from '.'

import {meals} from './__mock__'

export default {
  title: 'Meals',
  component: Meals
}

const Template = args => <Meals {...args} />

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
