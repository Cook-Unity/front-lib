import React from 'react'

import CuiImage from './CuiImage'

export default {
  title: 'Cui / CuiImage',
  component: CuiImage,
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
    }
  }
}

const Template = args => <CuiImage {...args} />

export const Default = Template.bind({})
Default.args = {}
