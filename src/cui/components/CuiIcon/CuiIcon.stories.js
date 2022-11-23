import React from 'react'

import CuiIcon from './CuiIcon'

export default {
  title: 'Cui / CuiIcon',
  component: CuiIcon,
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: ['alert', 'heart', 'menu', 'star']
      },
      defaultValue: 'heart'
    },
    role: {
      control: {
        type: 'select',
        options: ['button', 'icon']
      },
      defaultValue: 'icon'
    }
  }
}

const Template = args => <CuiIcon {...args}>Link</CuiIcon>

export const Default = Template.bind({})
Default.args = {
  name: 'heart'
}
