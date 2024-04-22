import React from 'react'

import CuiSegmentButton from './CuiSegmentButton'

export default {
  title: 'Cui / Components / CuiSegmentButton',
  component: CuiSegmentButton,
  argTypes: {
    active: {
      control: 'boolean'
    }
  },
  args: {
    active: false
  }
}

const Template = args => <CuiSegmentButton {...args}>Link</CuiSegmentButton>

export const Default = Template.bind({})
