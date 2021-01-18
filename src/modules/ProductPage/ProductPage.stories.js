import React from 'react'
import defaultProps from './__mock__'

import ProductPage from './index'

export default {
  title: 'Modules/ProductPage',
  component: ProductPage
}

const Template = args => (
  <div id="storyBookRootContainer">
    <ProductPage {...args} reviewModalContainerId="storyBookRootContainer" />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  productData: {
    ...defaultProps.meal
  },
  isOrdering: true,
  goBack: () => {}
}
