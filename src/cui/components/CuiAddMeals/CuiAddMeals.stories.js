import React from 'react'
import CuiAddMeals from './CuiAddMeals'

import {
  add_meals_added,
  add_meals_basic,
  add_meals_available,
  add_meals_not_available
} from './__mock__'

export default {
  title: 'Cui / Modules / CuiAddMeals',
  component: CuiAddMeals
}

const Template = args => {
  return <CuiAddMeals {...args} />
}

export const Default = Template.bind({})
Default.args = {
  ...add_meals_basic
}

export const Available = Template.bind({})
Available.args = {
  ...add_meals_available
}

export const NotAvailable = Template.bind({})
NotAvailable.args = {
  ...add_meals_not_available
}

export const Added = Template.bind({})
Added.args = {
  ...add_meals_added
}
