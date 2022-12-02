import React from 'react'

import CuiInput from './CuiInput'

export default {
  title: 'Cui / CuiInput',
  component: CuiInput,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['white']
      },
      defaultValue: 'white'
    },
    size: {
      control: {
        type: 'select',
        options: ['small']
      },
      defaultValue: 'small'
    },
    fill: {
      control: {
        type: 'select',
        options: ['solid']
      },
      defaultValue: 'solid'
    }
  }
}

const Template = args => <CuiInput {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'template',
  placeholder: 'Eg. text here'
}
