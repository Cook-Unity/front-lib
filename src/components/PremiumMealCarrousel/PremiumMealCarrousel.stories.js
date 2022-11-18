import React from 'react'
import PremiumMealCarrousel from './index'
import meals from './__mock__'

export default {
  title: 'PremiumMealCarrousel',
  component: PremiumMealCarrousel
}

const Template = args => <PremiumMealCarrousel {...args} />

export const Default = Template.bind({})
Default.args = {
  meals,
  collections: '',
  onAddItem: () => {},
  onRemoveItem: () => {},
  onMealClick: () => {},
  onSeeAllClick: () => {},
  onShowTracking: () => {},
  onClickTracking: () => {},
  onAddTracking: () => {},
  onClickArrowTracking: () => {},
  onSeeAllTracking: () => {}
}
