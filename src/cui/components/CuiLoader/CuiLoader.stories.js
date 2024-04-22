import React from 'react'

import CuiLoader from './CuiLoader'

export default {
  title: 'Cui / Components / CuiLoader',
  component: CuiLoader,
  argTypes: {
    fullscreen: {
      control: 'boolean'
    }
  },
  args: {
    fullscreen: false
  }
}

const Template = args => (
  <div
    style={{
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      width: '100%',
      height: '100vh'
    }}
  >
    <CuiLoader {...args} />
  </div>
)

export const Default = Template.bind({})
