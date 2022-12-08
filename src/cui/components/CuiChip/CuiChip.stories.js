import React from 'react'

import CuiChip from './CuiChip'

export default {
  title: 'Cui / Components / CuiChip',
  component: CuiChip,
  argTypes: {
    disabled: {
      control: 'boolean',
      defaultValue: false
    },
    selected: {
      control: 'boolean',
      defaultValue: false
    }
  }
}

const Template = args => <CuiChip {...args}>Chip</CuiChip>

export const Default = Template.bind({})
