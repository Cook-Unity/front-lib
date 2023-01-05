import React from 'react'

import CuiLoader from './CuiLoader'

export default {
  title: 'Cui / Components / CuiLoader',
  component: CuiLoader,
  argTypes: {
    fullscreen: {
      control: 'boolean',
      defaultValue: false
    }
  }
}

const Template = args => <CuiLoader {...args} />

export const Default = Template.bind({})
