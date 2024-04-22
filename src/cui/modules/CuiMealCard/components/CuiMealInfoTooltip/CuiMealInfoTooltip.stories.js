import React from 'react'

import CuiMealInfoTooltip from './CuiMealInfoTooltip'

export default {
  title: 'Cui / Modules / CuiMealCard / Components / CuiMealInfoTooltip',
  component: CuiMealInfoTooltip,
  args: {
    tooltipText: 'ASD'
  }
}

const Template = args => (
  <div style={{'margin-left': 200 + 'px'}}>
    <CuiMealInfoTooltip {...args} />
  </div>
)
export const Default = Template.bind({})
