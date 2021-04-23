import React from 'react'

import Macronutrients from './index'
import mealDetail from '../../test/mocks/mealDetail'

const props = {
  nutritionalFacts: mealDetail.nutritionInfo,
  calories: mealDetail.calories
}

export default {
  title: 'Macronutrients',
  component: Macronutrients
}

const Template = args => <Macronutrients {...args} />

export const Default = Template.bind({})
Default.args = {
  ...props
}
