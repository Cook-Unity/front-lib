import React from 'react'
import defaultProps from './__mock__'

import ProductPage from './index'

export default {
  title: 'Modules/ProductPage',
  component: ProductPage
}

const Template = args => <ProductPage {...args} />

export const Default = Template.bind({})
Default.args = {
  ...defaultProps,
  isOrdering: true
}
