import React from 'react'

import CuiSelect from './CuiSelect'

export default {
  title: 'Cui / Components / CuiSelect',
  component: CuiSelect,
  argTypes: {
    isDisabled: {
      control: 'boolean',
      defaultValue: false
    },
    isSearchable: {
      control: 'boolean',
      defaultValue: false
    },
    isMulti: {
      control: 'boolean',
      defaultValue: false
    },
    placeholder: {
      control: 'text',
      defaultValue: ''
    },
    options: {
      control: 'select',
      options: [],
      defaultValue: {}
    }
  }
}

const Template = args => <CuiSelect {...args}>CuiSelect</CuiSelect>

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
