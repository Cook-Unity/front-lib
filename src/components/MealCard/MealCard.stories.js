import React from 'react'
import MealCard from './'
import {MealCardSimple} from './MealCardExtensions'
import {meal_basic, meal_full} from './__mock__'

export default {
  title: 'MealCard (New)',
  component: MealCard
}

const Template = args => {
  return <MealCardSimple {...args} />
}

export const Default = Template.bind({})
Default.args = {
  meal: meal_basic,
  quantity: 0
}

export const Full = Template.bind({})
Full.args = {
  meal: meal_full,
  quantity: 0
}

export const Selected = Template.bind({})
Selected.args = {
  meal: meal_full,
  quantity: 1
}

export const NoExtraFee = Template.bind({})
NoExtraFee.args = {
  meal: meal_full,
  quantity: 1,
  noExtraFee: true
}

export const Christmas = Template.bind({})
Christmas.args = {
  meal: {
    ...meal_full,
    feature: {
      name: 'christmas',
      description: 'Christmas',
      background: '#CC231E',
      color: 'white'
    }
  },
  quantity: 0
}

export const FixedPrice = Template.bind({})
FixedPrice.args = {
  meal: {
    ...meal_full,
    fixed_price: true
  },
  quantity: 0
}

export const NoEditable = Template.bind({})
NoEditable.args = {
  meal: meal_full,
  isEditable: false
}

export const DisableAddItem = Template.bind({})
DisableAddItem.args = {
  meal: meal_full,
  quantity: 3,
  disableAddItem: true
}
