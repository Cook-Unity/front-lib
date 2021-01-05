import React from 'react'

import MealImage from './index'

export default {
  title: 'MealImage',
  component: MealImage
}

const Template = args => <MealImage {...args} />

export const Default = Template.bind({})
Default.args = {
  mealDetail: {
    imageFullUrl:
      'https://d1ureao5dcqpo4.cloudfront.net/media/catalog/product/cache/x600/t/u/turkey_sweet.jpg'
  }
}
