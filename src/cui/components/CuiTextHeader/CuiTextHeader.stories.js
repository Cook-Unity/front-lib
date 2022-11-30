import React from 'react'

import CuiTextHeader from './CuiTextHeader'

export default {
  title: 'Cui / CuiTextHeader',
  component: CuiTextHeader,
  argTypes: {
    position: {
      control: {
        type: 'select',
        options: ['center', 'start']
      },
      defaultValue: 'center'
    }
  }
}

const Template = args => (
  <CuiTextHeader {...args}>
    <>
      <b>25% OFF</b>
      <span>THE FIRST WEEK</span>
    </>
  </CuiTextHeader>
)

export const Default = Template.bind({})
Default.args = {}
