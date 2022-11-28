import React from 'react'

import CuiSegmentButton from './CuiSegmentButton'

export default {
  title: 'Cui / CuiSegmentButton',
  component: CuiSegmentButton,
  argTypes: {
    active: {
      control: 'boolean',
      defaultValue: false
    }
  }
}

const Template = args => <CuiSegmentButton {...args}>Link</CuiSegmentButton>

export const Default = Template.bind({})
Default.args = {}
