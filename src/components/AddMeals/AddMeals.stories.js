import React from 'react'
import AddMeals from './AddMeals'
import {fn} from '@storybook/test'
import {
  add_meals_added,
  add_meals_basic,
  add_meals_available,
  add_meals_not_available
} from './__mock__'

export default {
  title: 'AddMeals',
  component: AddMeals,
  args: {
    addCallback: fn(),
    unskipAndAddCallback: fn()
  }
}

const Template = args => {
  return <AddMeals {...args} />
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
