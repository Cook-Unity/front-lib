import React from 'react'

import CuiTextArea from './CuiTextArea'

export default {
  title: 'Cui / Components / CuiTextArea',
  component: CuiTextArea,
  argTypes: {
    placeholder: {
      control: 'text',
      defaultValue: 'Please add a comment...'
    },
    disabled: {
      control: 'boolean',
      defaultValue: false
    }
  }
}

const Template = args => <CuiTextArea {...args} />

export const Default = Template.bind({})
