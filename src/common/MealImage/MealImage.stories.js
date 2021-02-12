import React from 'react'

import MealImage from './index'

export default {
  title: 'MealImage',
  component: MealImage
}

const Template = args => <MealImage {...args} />

export const Default = Template.bind({})
Default.args = {
  imageUrl:
    'https://d1ureao5dcqpo4.cloudfront.net/media/catalog/product/cache/x600/c/o/corn-nut-shrimp-jgv.jpeg'
}

export const NoImage = Template.bind({})
NoImage.args = {
  imageUrl: '/no-image'
}

export const NoImageAndNoText = Template.bind({})
NoImageAndNoText.args = {
  imageUrl: '/no-image',
  withoutText: true
}
