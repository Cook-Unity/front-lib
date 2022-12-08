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
    }
  }
}

const Template = args => <CuiFabButton {...args}>AS</CuiFabButton>

export const Default = Template.bind({})
