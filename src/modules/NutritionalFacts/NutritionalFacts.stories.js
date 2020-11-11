import React from 'react'

import NutritionalFacts from './index'
import {defaultProps} from '../../mocks/mock-mealDetails'

export default {
  title: 'NutritionalFacts',
  component: NutritionalFacts
}

const Template = args => <NutritionalFacts {...args} />

export const Default = Template.bind({})
Default.args = {
  ...defaultProps
}
