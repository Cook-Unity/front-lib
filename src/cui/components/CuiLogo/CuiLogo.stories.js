import React from 'react'

import CuiLogo from './CuiLogo'

export default {
  title: 'Cui / Components / CuiLogo',
  component: CuiLogo,
  argTypes: {
    color: {
      control: 'select',
      options: ['dark', 'light']
    }
  },
  args: {
    color: 'light'
  }
}

const Template = args => (
  <div
    style={{
      padding: '20px',
      borderRadius: '5px',
      backgroundColor: args.color === 'dark' ? 'white' : 'black'
    }}
  >
    <CuiLogo {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  color: 'light'
}
