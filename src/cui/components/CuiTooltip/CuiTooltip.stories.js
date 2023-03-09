import React from 'react'

import {CuiTooltip} from './CuiTooltip'
import CuiIcon from '../CuiIcon/CuiIcon'
import './story.scss'

export default {
  title: 'Cui / Components / CuiTooltip',
  component: CuiTooltip
}

const TipComponent = () => {
  return <div>Hi there</div>
}

const Template = args => (
  <CuiTooltip tip={<TipComponent />} {...args}>
    <CuiIcon name="infoEmptyCircled" />
  </CuiTooltip>
)

export const Default = Template.bind({})
