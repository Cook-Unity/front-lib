import React from 'react'

import CuiCategoryHeader from './CuiCategoryHeader'

export default {
  title: 'Cui / Components / CuiCategoryHeader',
  component: CuiCategoryHeader
}

const DefaultTemplate = args => <CuiCategoryHeader {...args} />

export const Default = DefaultTemplate.bind({})
Default.args = {
  image:
    'https://d1ureao5dcqpo4.cloudfront.net/media/categories/breakfast-mainphoto.png',
  name: 'Breakfast',
  title: 'Wake up with flavor',
  description:
    'Start your day tasty and healthy with chef-approved breakfasts. From eggs to smoothies to oatmeal, you’re sure to find the perfect fuel for your mornings.',
  items: 15
}
