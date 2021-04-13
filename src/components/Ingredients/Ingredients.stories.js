import React from 'react'

import Ingredients from './index'
import {defaultProps} from './data.mock'

export default {
  title: 'Ingredients',
  component: Ingredients
}

const Template = args => <Ingredients {...args} />

export const Default = Template.bind({})
Default.args = {
  ...defaultProps
}
