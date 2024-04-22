import React from 'react'
import {fn} from '@storybook/test'
import PremiumMealCarrousel from './index'
import meals from './__mock__'

export default {
  title: 'PremiumMealCarrousel',
  component: PremiumMealCarrousel,
  args: {
    onAddItem: fn(),
    onRemoveItem: fn(),
    onMealClick: fn(),
    onSeeAllClick: fn(),
    onShowTracking: fn(),
    onClickTracking: fn(),
    onAddTracking: fn(),
    onClickArrowTracking: fn(),
    onSeeAllTracking: fn()
  }
}

const Template = args => <PremiumMealCarrousel {...args} />

export const Default = Template.bind({})
Default.args = {
  meals,
  collections: ''
}
