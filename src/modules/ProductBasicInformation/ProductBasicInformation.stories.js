import React from 'react'

import ProductBasicInformation from './index'
import {defaultProps} from '../../mocks/mock-mealDetails'

export default {
  title: 'ProductBasicInformation',
  component: ProductBasicInformation
}

const Template = args => <ProductBasicInformation {...args} />

export const Default = Template.bind({})
Default.args = {
  ...defaultProps
}
