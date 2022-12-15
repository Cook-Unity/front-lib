import React from 'react'

import CuiMealDescription from './CuiMealDescription'

export default {
  title: 'Cui / Modules / CuiMealCard / Components / CuiMealDescription',
  component: CuiMealDescription
}

const Template = args => (
  <CuiMealDescription {...args}>
    <b>Braised Pork</b> with Butternut Squash and...
  </CuiMealDescription>
)

export const Default = Template.bind({})
