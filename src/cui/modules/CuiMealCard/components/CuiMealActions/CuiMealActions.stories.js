import React from 'react'

import CuiMealActions from './CuiMealActions'

export default {
  title: 'Cui / Modules / CuiMealCard / Components / CuiMealActions',
  component: CuiMealActions,
  argTypes: {
    tooltipText: {
      defaultValue: 'ASD'
    }
  }
}

const Template = args => <CuiMealActions {...args} />

export const Default = Template.bind({})
