import React from 'react'
import {action} from '@storybook/addon-actions'
import CuiInput from './CuiInput'

export default {
  title: 'Cui / Components / CuiInput',
  component: CuiInput,
  argTypes: {
    color: {
      control: 'select',
      options: ['white', 'black']
    },
    size: {
      control: 'select',
      options: ['small']
    },
    fill: {
      control: 'select',
      options: ['solid']
    },
    loading: {
      control: 'boolean'
    },
    onChange: action('onChange'),
    onBlur: action('onBlur')
  },
  args: {
    color: 'white',
    size: 'small',
    fill: 'solid'
  }
}

const Template = args => <CuiInput {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'template',
  placeholder: 'Eg. text here',
  onChange: action('onChange'),
  onBlur: action('onBlur')
}
