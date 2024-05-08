import React from 'react'

import CuiAvatar from './CuiAvatar'

export default {
  title: 'Cui / Components / CuiAvatar',
  component: CuiAvatar,
  argTypes: {
    src: {
      control: 'text',
      required: true
    },
    title: {
      control: 'text',
      required: true
    },
    border: {
      control: 'radio',
      options: ['', 'rounded']
    }
  },
  args: {
    border: 'rounded',
    title: 'Healthy eating, environmentally conscious.',
    src: 'https://static.cookunity.com/cross/front-lib/images/cui-demo-banner-image.jpeg'
  }
}

const Template = args => <CuiAvatar {...args} />

export const Default = Template.bind({})
