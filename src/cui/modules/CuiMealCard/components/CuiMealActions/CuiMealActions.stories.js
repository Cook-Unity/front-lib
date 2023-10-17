import React from 'react'

import CuiMealActions from './CuiMealActions'

export default {
  title: 'Cui / Modules / CuiMealCard / Components / CuiMealActions',
  component: CuiMealActions,
  argTypes: {
    priceText: {
      defaultValue: 'Add extra for $19.99'
    },
    strikethroughPrice: {
      defaultValue: '$30.99'
    },
    tooltipText: {
      defaultValue: 'ASD'
    }
  }
}

const Template = args => <CuiMealActions {...args} />

export const Default = Template.bind({})
