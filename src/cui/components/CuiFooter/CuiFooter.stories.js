import React from 'react'
import CuiFooter from './CuiFooter'

export default {
  title: 'Cui / Modules / CuiFooter',
  component: CuiFooter,
  argTypes: {
    homeLink: {
      control: 'text',
      defaultValue: '/'
    },
    baseUrl: {
      control: 'text',
      defaultValue: null
    },
    email: {
      control: 'text',
      defaultValue: undefined
    }
  }
}

const Template = args => <CuiFooter {...args} />

export const Default = Template.bind({})
Default.args = {}
