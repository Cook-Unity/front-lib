import React from 'react'

import ProductBasicInformation from './index'
import mockData from './__mock__.json'

const props = {
  productData: mockData.meal
}

export default {
  title: 'ProductBasicInformation',
  component: ProductBasicInformation
}

const Template = args => <ProductBasicInformation {...args} />

export const Default = Template.bind({})
Default.args = {
  ...props,
  onChefClick: () => console.log('onChefClick'),
  isLoading: false,
  isOrdering: false,
  addProduct: () => console.log('addProduct')
}
