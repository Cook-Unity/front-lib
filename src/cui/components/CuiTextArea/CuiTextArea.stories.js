import React from 'react'

import CuiTextArea from './CuiTextArea'

export default {
  title: 'Cui / Components / CuiTextArea',
  component: CuiTextArea,
  argTypes: {
    placeholder: {
      control: 'text'
    },
    disabled: {
      control: 'boolean'
    }
  },
  args: {
    placeholder: 'Please add a comment...',
    disabled: false
  }
}

const Template = args => <CuiTextArea {...args} />

export const Default = Template.bind({})
