import React from 'react'

import FinalSteps from './index'
import {defaultProps} from '../../mocks/mock-mealDetails'

export default {
  title: 'FinalSteps',
  component: FinalSteps
}

const Template = args => <FinalSteps {...args} />

export const Default = Template.bind({})
Default.args = {
  ...defaultProps
}
