import React from 'react'

import CuiFabButton from './CuiFabButton'

export default {
  title: 'Cui / Components / CuiFabButton',
  component: CuiFabButton,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['dark', 'light']
      },
      defaultValue: 'light'
    },
    size: {
      control: {
        type: 'select',
        options: ['medium', 'large']
      },
      defaultValue: 'medium'
    },
    fixed: {
      control: 'boolean',
      defaultValue: false
    },
    showBorder: {
      control: 'boolean',
      defaultValue: false
    }
  }
}

const Template = args => <CuiFabButton {...args}>AS</CuiFabButton>

export const Default = Template.bind({})
