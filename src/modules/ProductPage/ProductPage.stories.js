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
  openInModal: true,
  isOrdering: {
    total: 2
  },
  onCloseModal: () => {
    console.log('modal close')
  }
}

export const isLoading = Template.bind({})
isLoading.args = {
  isLoading: true
}
