import React from 'react'

import ProductBasicInformation from './index'
import mealDetail from '../../test/mocks/mealDetail'

export default {
  title: 'ProductBasicInformation',
  component: ProductBasicInformation
}

const Template = args => <ProductBasicInformation {...args} />

export const Default = Template.bind({})
Default.args = {
  mealDetail,
  onChefClick: () => console.log('onChefClick'),
  isLoading: false,
  isOrdering: false,
  addProduct: () => console.log('addProduct')
}
