import React from 'react'
import CuiCardContent from '../CuiCardContent/CuiCardContent'
import CuiImage from '../CuiImage/CuiImage'

import CuiCard from './CuiCard'

export default {
  title: 'Cui / Components / CuiCard',
  component: CuiCard,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['dark', 'light']
      },
      defaultValue: 'dark'
    },
    direction: {
      control: {
        type: 'select',
        options: ['column', 'row']
      },
      defaultValue: 'column'
    }
  }
}

// const items = [
//   {id: 1, active: true, underline: false, label: 'Membership Plans'},
//   {id: 2, active: true, underline: true, label: 'Meals'},
//   {id: 3, active: false, underline: false, label: 'Checkout'}
// ]
const Template = args => (
  <CuiCard {...args}>
    <CuiImage
      src="https://cu-product-media.s3.amazonaws.com/media/catalog/product/b/a/Bay+Scallops-Fennel-Citrus1219+1.jpeg"
      title="image"
    />
    <CuiCardContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
    </CuiCardContent>
  </CuiCard>
)

export const Default = Template.bind({})
Default.args = {
  style: {
    width: '300px'
  }
}
