import React from 'react'

import NutritionalFacts from './index'
import mealDetail from '../../test/mocks/mealDetail'

const props = {
  nutritionalFacts: mealDetail.nutritionInfo
}

export default {
  title: 'NutritionalFacts',
  component: NutritionalFacts
}

const Template = args => <NutritionalFacts {...args} />

export const Default = Template.bind({})
Default.args = {
  ...props
}
