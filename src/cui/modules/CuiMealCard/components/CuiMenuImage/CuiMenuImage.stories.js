import React from 'react'
import CuiMenuImage from './CuiMenuImage'

export default {
  title: 'Cui / Modules / CuiMealCard / Components / CuiMealImage',
  component: CuiMenuImage,
  argTypes: {
    primary_image: {
      control: {
        type: 'text',
        required: true
      }
    },
    secondary_image: {
      control: {
        type: 'text'
      }
    },
    text: {
      control: {
        type: 'text'
      }
    }
  }
}

const Template = args => <CuiMenuImage {...args} />

export const Default = Template.bind({})
Default.args = {
  primary_image:
    'https://d1ureao5dcqpo4.cloudfront.net/media/merchandiseSets/chef-akhtar-chicken-tinga-tacos.jpg'
}

export const WithSecondaryImage = Template.bind({})
WithSecondaryImage.args = {
  primary_image:
    'https://d1ureao5dcqpo4.cloudfront.net/media/merchandiseSets/chef-akhtar-chicken-tinga-tacos.jpg',
  secondary_image:
    'https://cu-product-media.s3.amazonaws.com/media/catalog/product/b/a/Bay+Scallops-Fennel-Citrus1219+1.jpeg'
}

export const WithText = Template.bind({})
WithText.args = {
  primary_image:
    'https://d1ureao5dcqpo4.cloudfront.net/media/merchandiseSets/chef-akhtar-chicken-tinga-tacos.jpg',
  text: 'sold out'
}

export const ImageComingSoon = Template.bind({})
WithText.args = {}
