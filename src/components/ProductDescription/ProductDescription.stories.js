import React from 'react'
import mealDetail from '../../test/mocks/mealDetail'

import ProductDescription from './index'

export default {
  title: 'ProductDescription',
  component: ProductDescription
}

const Template = args => <ProductDescription {...args} />

export const Default = Template.bind({})
Default.args = {
  mealStory: mealDetail.meal_story
}
