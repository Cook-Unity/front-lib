import React from 'react'
import CuiFooter from './CuiFooter'

export default {
  title: 'Cui / Modules / CuiFooter',
  component: CuiFooter,
  argTypes: {
    homeLink: {
      control: 'text'
    },
    baseUrl: {
      control: 'text'
    },
    email: {
      control: 'text'
    }
  },
  args: {
    homeLink: '/',
    baseUrl: null,
    email: undefined
  }
}

const Template = args => <CuiFooter {...args} />

export const Default = Template.bind({})
Default.args = {}
