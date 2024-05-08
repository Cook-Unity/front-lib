import React from 'react'

import CuiFabButton from './CuiFabButton'

export default {
  title: 'Cui / Components / CuiFabButton',
  component: CuiFabButton,
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'dark', 'light', 'gold']
    },
    size: {
      control: 'select',
      options: ['medium', 'large']
    },
    fixed: {
      control: 'boolean'
    },
    showBorder: {
      control: 'boolean'
    }
  },
  args: {
    color: 'light',
    size: 'medium',
    fixed: false,
    showBorder: false
  }
}

const Template = args => <CuiFabButton {...args}>AS</CuiFabButton>

export const Default = Template.bind({})
