import React from 'react'

import Macronutrients from './index'
import mealDetail from '../../test/mocks/mealDetail'

export default {
  title: 'Macronutrients',
  component: Macronutrients
}

const Template = args => <Macronutrients {...args} />

export const Default = Template.bind({})
Default.args = {
  nutritionInfo: mealDetail.nutritionInfo,
  calories: mealDetail.calories
}
