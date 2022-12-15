import React from 'react'

import CuiAvatar from './CuiAvatar'

export default {
  title: 'Cui / Components / CuiAvatar',
  component: CuiAvatar,
  argTypes: {
    src: {
      control: 'text',
      required: true,
      defaultValue:
        'https://static.cookunity.com/cross/front-lib/images/cui-demo-banner-image.jpeg'
    },
    title: {
      control: 'text',
      required: true,
      defaultValue: 'Healthy eating,environmentally conscious.'
    },
    border: {
      control: {
        type: 'select',
        options: ['rounded']
      }
    }
  }
}

const Template = args => <CuiAvatar {...args} />

export const Default = Template.bind({})
