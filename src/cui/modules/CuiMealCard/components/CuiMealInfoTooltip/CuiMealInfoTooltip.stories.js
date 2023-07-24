import React from 'react'

import CuiMealInfoTooltip from './CuiMealInfoTooltip'

export default {
  title: 'Cui / Modules / CuiMealCard / Components / CuiMealInfoTooltip',
  component: CuiMealInfoTooltip,
  argTypes: {
    tooltipText: {
      defaultValue: 'ASD'
    }
  }
}

const Template = args => (
  <div style={{'margin-left': 200 + 'px'}}>
    <CuiMealInfoTooltip {...args} />
  </div>
)
export const Default = Template.bind({})
