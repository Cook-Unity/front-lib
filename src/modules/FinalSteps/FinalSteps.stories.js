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
  chefInstructions: mealDetail.cookingSteps.oven_steps,
  fastInstructions: mealDetail.cookingSteps.microwave_steps,
  isLoading: false
}
