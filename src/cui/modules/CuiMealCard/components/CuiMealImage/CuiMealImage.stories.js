import React from 'react'
import CuiImage from '../../../../components/CuiImage/CuiImage'
import CuiMealBadge from '../CuiMealBadge/CuiMealBadge'

import CuiMealImage from './CuiMealImage'

export default {
  title: 'Cui / Modules / CuiMealCard / Components / CuiMealImage',
  component: CuiMealImage,
  args: {
    mealImage:
      'https://d1ureao5dcqpo4.cloudfront.net/media/merchandiseSets/chef-akhtar-chicken-tinga-tacos.jpg',
    tagLabel: 'New'
  }
}

const Template = args => (
  <CuiMealImage>
    {args.tagLabel && <CuiMealBadge>{args.tagLabel}</CuiMealBadge>}
    <CuiImage src={args.mealImage} title="image" />
  </CuiMealImage>
)

export const Default = Template.bind({})
