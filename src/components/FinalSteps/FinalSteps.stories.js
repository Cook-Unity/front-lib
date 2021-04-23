import React from 'react'

import FinalSteps from './index'
import mealDetail from '../../test/mocks/mealDetail'

export default {
  title: 'FinalSteps',
  component: FinalSteps
}

const Template = args => <FinalSteps {...args} />

export const Default = Template.bind({})
Default.args = {
  chefInstructions: mealDetail.cooking_steps.oven_steps,
  fastInstructions: mealDetail.cooking_steps.microwave_steps,
  isLoading: false
}
