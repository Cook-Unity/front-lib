import React from 'react'

import CuiLogo from './CuiLogo'

export default {
  title: 'Cui / Components / CuiLogo',
  component: CuiLogo,
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

const Template = args => <CuiLogo {...args}>Link</CuiLogo>

export const Default = Template.bind({})
Default.args = {
  color: 'light'
}
