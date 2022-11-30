import React from 'react'

import CuiAllyButton from './CuiAllyButton'

export default {
  title: 'Cui / CuiAllyButton',
  component: CuiAllyButton,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['dark', 'light']
      },
      defaultValue: 'dark'
    }
  }
}

const Template = args => <CuiAllyButton {...args} />

export const Default = Template.bind({})
Default.args = {}
