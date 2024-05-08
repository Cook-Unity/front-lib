import React from 'react'

import CuiTextHeader from './CuiTextHeader'

export default {
  title: 'Cui / Components / CuiTextHeader',
  component: CuiTextHeader,
  argTypes: {
    position: {
      control: 'select',
      options: ['center', 'start']
    }
  },
  args: {
    position: 'center'
  }
}

const Template = args => (
  <CuiTextHeader {...args}>
    <b>25% OFF</b>
    <span>THE FIRST WEEK</span>
  </CuiTextHeader>
)

export const Default = Template.bind({})
