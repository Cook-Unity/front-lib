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
  mealDetail,
  isLoading: false
}
