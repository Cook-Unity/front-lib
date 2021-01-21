import React from 'react'
import MealCard from './'
import {MealCardCase} from './MealCardCase'
import {meal_basic, meal_full, meal_long_name} from './__mock__'

export default {
  title: 'MealCard (New)',
  component: MealCard
}

const Template = args => {
  return <MealCardCase {...args} />
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

export const LongName = Template.bind({})
LongName.args = {
  meal: meal_long_name
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

export const onLikeMeal = Template.bind({})
onLikeMeal.args = {
  meal: meal_full,
  onLikeMeal: true
}

export const onWarnings = Template.bind({})
onWarnings.args = {
  meal: {
    ...meal_full,
    warning: 'Contains: Gluten, Nuts, Shellfish',
    allergens: [
      {
        name: 'Gluten'
      },
      {
        name: 'Nuts'
      },
      {
        name: 'Shellfish'
      }
    ]
  },
  onWarnings: true
}

export const userRating = Template.bind({})
userRating.args = {
  meal: {
    ...meal_full,
    user_rating: 5
  }
}
