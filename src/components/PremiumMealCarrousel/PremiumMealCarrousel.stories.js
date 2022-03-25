import React from 'react'
import PremiumMealCarrousel from './index'

export default {
  title: 'PremiumMealCarrousel',
  component: PremiumMealCarrousel
}

const Template = args => <PremiumMealCarrousel {...args} />

export const Default = Template.bind({})
Default.args = {
  total: 2
}
