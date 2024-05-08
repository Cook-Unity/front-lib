import React from 'react'
import {fn} from '@storybook/test'

import CuiImage from './CuiImage'

export default {
  title: 'Cui / Components / CuiImage',
  component: CuiImage,
  argTypes: {
    src: {
      control: 'text'
    },
    basePath: {
      control: 'text'
    },
    title: {
      control: 'text',
      required: true
    },
    lazyLoading: {
      control: 'select',
      options: ['lazy', 'eager']
    }
  },
  args: {
    title: 'Healthy eating,environmentally conscious.',
    lazyLoading: 'lazy',
    onError: fn(),
    onLoad: fn()
  }
}

const Template = args => <CuiImage {...args} />
export const Default = Template.bind({})
Default.args = {
  src: 'https://static.cookunity.com/cross/front-lib/images/cui-demo-banner-image.jpeg'
}

const ImagixTemplate = args => <CuiImage {...args} />
export const Imagix = ImagixTemplate.bind({})
Imagix.args = {
  basePath: 'https://cu-media.imgix.net',
  relativePath:
    '/media/catalog/product/cache/x1200/s/h/shrimpwithfreshcorngrits-chris-chi.jpg',
  config: {
    aspectRatio: '1:1',
    extras: 'txt=hola!!&txt-align=center-middle&txt-size=100'
  },
  noImageSrc:
    '/media/catalog/product/cache/x1200/g/a/garces-mission-style-beef-burrito.jpeg',
  srcSetSizes: [
    {width: 400, size: '2x'},
    {width: 800, size: '3x'}
  ]
}

const ErrorImageTemplate = args => <CuiImage {...args} />
export const ErrorImage = ErrorImageTemplate.bind({})
ErrorImage.args = {
  basePath: 'https://cu-media.imgix.net',
  relativePath: '/media/catalog/product/error.jpg',
  config: {
    aspectRatio: '1:1',
    extras: 'txt=Error!!&txt-align=center-middle&txt-size=100'
  },
  noImageSrc:
    '/media/catalog/product/cache/x1200/g/a/garces-mission-style-beef-burrito.jpeg',
  srcSetSizes: [
    {width: 400, size: '2x'},
    {width: 800, size: '3x'}
  ]
}
