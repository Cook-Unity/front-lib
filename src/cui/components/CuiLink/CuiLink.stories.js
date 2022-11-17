import React from 'react'

import CuiLink from './CuiLink'

export default {
  title: 'Cui / CuiLink',
  component: CuiLink,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'dark']
      },
      defaultValue: 'primary'
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      },
      defaultValue: 'medium'
    },
    fill: {
      control: {
        type: 'select',
        options: ['clear', 'outline', 'solid']
      },
      defaultValue: 'solid'
    },
    type: {
      control: {
        type: 'select',
        options: ['button', 'submit', 'reset']
      },
      defaultValue: 'button'
    },
    disabled: {
      control: 'boolean',
      defaultValue: false
    },
    loading: {
      control: 'boolean',
      defaultValue: false
    }
  }
}

const Template = args => <CuiLink {...args}>Link</CuiLink>

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  href: 'https://cookunity.com/',
  target: '_blank'
}
export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary'
}
export const Tertiary = Template.bind({})
Tertiary.args = {
  color: 'tertiary',
  href: 'https://cookunity.com/',
  target: '_blank'
}
