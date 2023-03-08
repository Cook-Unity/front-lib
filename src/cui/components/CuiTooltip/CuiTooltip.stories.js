import React from 'react'

import {CuiTooltip} from './CuiTooltip'

export default {
  title: 'Cui / Components / CuiTooltip',
  component: CuiTooltip
}

const TipComponent = () => {
  return <div>Hi there</div>
}

const Template = args => (
  <CuiTooltip tip={<TipComponent />} {...args}>
    Cui Tooltip
  </CuiTooltip>
)

export const Default = Template.bind({})
