import React from 'react'

import CuiHeader from './CuiHeader'

export default {
  title: 'Cui / CuiHeader',
  component: CuiHeader,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['dark', 'transparent']
      },
      defaultValue: 'dark'
    }
  }
}

const Template = args => <CuiHeader {...args}>Link</CuiHeader>

export const Default = Template.bind({})
Default.args = {
  color: 'dark'
}
