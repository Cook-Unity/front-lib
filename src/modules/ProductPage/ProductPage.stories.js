import React from 'react'
import {fn} from '@storybook/test'
import {meal} from './__mock__'

import ProductPage from './index'

export default {
  title: 'Modules/ProductPage',
  component: ProductPage,
  args: {
    onCloseModal: fn(),
    onChefClick: fn(),
    modalContainer: 'root'
  }
}

const Template = args => (
  <div id="root" style={{minHeight: '500px'}}>
    <ProductPage {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  productData: meal
}

export const Ordering = Template.bind({})
Ordering.args = {
  productData: meal,
  openInModal: true,
  isOrdering: {
    total: 2
  }
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true
}

export const LoadingInModal = Template.bind({})
LoadingInModal.args = {
  openInModal: true,
  isLoading: true
}
