import React from 'react'
import {fn} from '@storybook/test'
import CuiChip from './CuiChip'

export default {
  title: 'Cui / Components / CuiChip',
  component: CuiChip,
  argTypes: {
    disabled: {
      control: 'boolean'
    },
    selected: {
      control: 'boolean'
    }
  },
  args: {
    disabled: false,
    selected: false,
    onClick: fn()
  }
}

const Template = args => <CuiChip {...args}>Chip</CuiChip>

export const Default = Template.bind({})
