import React from 'react'
import MealCarrousel from './index'
import {meals} from './__mock__'

export default {
  title: 'MealCarrousel',
  component: MealCarrousel
}

const Template = args => <MealCarrousel {...args} />

export const Premium = Template.bind({})
Premium.args = {
  meals,
  collectionName: 'Premium Meals',
  collectionId: 17,
  title: 'Dine fine with Chef Specials',
  type: 'premium',
  moduleName: 'premium-row',
  moduleId: 1
}

export const Sides = Template.bind({})
Sides.args = {
  meals,
  collectionName: 'Sides',
  collectionId: 45,
  title: 'Create your own perfect meal',
  type: 'sides',
  moduleName: 'sides-row',
  moduleId: 2
}
