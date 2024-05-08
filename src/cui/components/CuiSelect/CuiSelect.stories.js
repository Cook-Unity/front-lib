import React from 'react'
import {fn} from '@storybook/test'
import CuiSelect from './CuiSelect'

export default {
  title: 'Cui / Components / CuiSelect',
  component: CuiSelect,
  argTypes: {
    isDisabled: {
      control: 'boolean'
    },
    isSearchable: {
      control: 'boolean'
    },
    isMulti: {
      control: 'boolean'
    },
    placeholder: {
      control: 'text'
    },
    options: {
      control: 'select',
      options: []
    },
    args: {
      onChange: fn()
    }
  }
}

const Template = args => <CuiSelect {...args} />

export const Default = Template.bind({})
Default.args = {
  isDisabled: false,
  isSearchable: false,
  isMulti: false,
  placeholder: 'Select an option...',
  options: [
    {
      label: 'First option',
      value: '1'
    },
    {
      label: 'Second option',
      value: '2'
    }
  ]
}
