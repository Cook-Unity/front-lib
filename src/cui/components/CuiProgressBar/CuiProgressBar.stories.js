import React from 'react'
import CuiProgressBar from '../CuiProgressBar/CuiProgressBar'

export default {
  title: 'Cui / CuiProgressBar',
  component: CuiProgressBar,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary']
      },
      defaultValue: 'primary'
    }
  }
}

const Template = args => <CuiProgressBar {...args} />

export const Default = Template.bind({})
Default.args = {
  value: 1,
  steps: [1, 2, 3]
}
