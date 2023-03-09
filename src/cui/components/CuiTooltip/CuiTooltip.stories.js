import React from 'react'

import {CuiTooltip} from './CuiTooltip'
import CuiIcon from '../CuiIcon/CuiIcon'
import './story.scss'

export default {
  title: 'Cui / Components / CuiTooltip',
  component: CuiTooltip
}

// "\n" combined with "white-space: pre-wrap;" allows to break the line.
// Check ./story.scss to see the mobile breakline hack.
const copy = 'Taxes, delivery\nand other fees'

const Template = args => (
  <div className="container">
    <div>This is our story</div>&nbsp;&nbsp;
    <CuiTooltip tip={<div>{copy}</div>} {...args}>
      {/* Children needs to be a block element like div, otherwise you have to override the margin-top attr */}
      <CuiIcon name="infoEmptyCircled" />
    </CuiTooltip>
  </div>
)

export const Default = Template.bind({})
