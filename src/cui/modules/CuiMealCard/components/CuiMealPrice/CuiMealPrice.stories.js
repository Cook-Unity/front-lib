import React from 'react'

import CuiMealPrice from './CuiMealPrice'

export default {
  title: 'Cui / Modules / CuiMealCard / Components / CuiMealPrice',
  component: CuiMealPrice
}

const Template = args => <CuiMealPrice {...args}>+ $9.99</CuiMealPrice>

export const Default = Template.bind({})
