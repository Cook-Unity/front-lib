import React from 'react'
import CuiCard from '../CuiCard/CuiCard'

import CuiCardContent from './CuiCardContent'

export default {
  title: 'Cui / Components / CuiCardContent',
  component: CuiCardContent
}

const Template = args => (
  <CuiCard>
    <CuiCardContent {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
    </CuiCardContent>
  </CuiCard>
)

export const Default = Template.bind({})
