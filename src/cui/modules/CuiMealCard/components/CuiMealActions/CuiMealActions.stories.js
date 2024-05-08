import React from 'react'

import CuiMealActions from './CuiMealActions'

export default {
  title: 'Cui / Modules / CuiMealCard / Components / CuiMealActions',
  component: CuiMealActions
}

const Template = args => <CuiMealActions {...args} />

export const Default = Template.bind({})
Default.args = {
  priceText: 'Add extra for $19.99',
  strikethroughPrice: '$30.99',
  tooltipText: 'ASD'
}
