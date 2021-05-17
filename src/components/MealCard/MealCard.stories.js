import React from 'react'
import MealCard from './'
import {MealCardCase} from './MealCardCase'

import {
  meal_basic,
  meal_full,
  meal_new,
  meal_long_name,
  with_warnings,
  with_user_rating,
  out_of_stock,
  meal_no_image,
  meal_featured
} from './__mock__'

export default {
  title: 'MealCard',
  component: MealCard
}

const Template = args => {
  return <MealCardCase {...args} />
}

export const Default = Template.bind({})
Default.args = {
  meal: meal_basic
}

export const NewTag = Template.bind({})
NewTag.args = {
  meal: meal_new,
  quantity: 0
}

export const NoEditable = Template.bind({})
NoEditable.args = {
  meal: out_of_stock,
  isEditable: false
}

export const OutOfStock = Template.bind({})
OutOfStock.args = {
  meal: out_of_stock,
  quantity: 0
}

export const NoMealImage = Template.bind({})
NoMealImage.args = {
  meal: meal_no_image
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

export const Thanksgiving = Template.bind({})
Thanksgiving.args = {
  meal: meal_featured,
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

export const DisableAddItem = Template.bind({})
DisableAddItem.args = {
  meal: meal_full,
  quantity: 3,
  disableAddItem: true
}

export const buttonLike = Template.bind({})
buttonLike.args = {
  meal: meal_full,
  buttonLike: true
}

export const onWarnings = Template.bind({})
onWarnings.args = {
  meal: with_warnings,
  onWarnings: true
}

export const userRating = Template.bind({})
userRating.args = {
  meal: with_user_rating
}

export const isLoading = Template.bind({})
isLoading.args = {
  meal: meal_full,
  isLoading: true
}

export const withCelebrityFeatures = Template.bind({})
withCelebrityFeatures.args = {
  meal: meal_full,
  enableCelebrityFeatures: true
}

export const Full = Template.bind({})
Full.args = {
  meal: {
    ...meal_full,
    ...meal_featured,
    ...with_warnings,
    ...with_user_rating
  },
  quantity: 3,
  buttonLike: true,
  enableCelebrityFeatures: true,
  noExtraFee: true
}
