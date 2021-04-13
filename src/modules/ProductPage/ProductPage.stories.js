import React from 'react'
import {meal} from './__mock__'

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
  productData: meal
}

export const inModal = Template.bind({})
inModal.args = {
  productData: meal,
  openInModal: true
}

export const Ordering = Template.bind({})
Ordering.args = {
  productData: meal,
  isOrdering: true
}
