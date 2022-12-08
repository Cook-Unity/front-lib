import React from 'react'
import CuiMealCarrousel from './CuiMealCarrousel'
import {meals, collections} from './__mock__'

export default {
  title: 'Cui / Modules / CuiMealCarrousel',
  component: CuiMealCarrousel
}

const Template = args => <CuiMealCarrousel {...args} />

export const Premium = Template.bind({})
Premium.args = {
  meals,
  collectionName: 'Premium Meals',
  collectionId: 0,
  titleStart: 'Lot of special ingredients',
  titleEnd: 'you will love',
  type: 'premium',
  moduleName: 'premium-row',
  moduleId: 1,
  collections,
  onAddItem: () => {},
  onRemoveItem: () => {},
  onMealClick: () => {},
  onSeeAllClick: () => {},
  onShowTracking: () => {},
  onClickTracking: () => {},
  onAddTracking: () => {},
  onSwipeTracking: () => {},
  onSeeAllTracking: () => {}
}

export const Sides = Template.bind({})
Sides.args = {
  meals,
  collectionName: 'Sides',
  collectionId: 45,
  titleStart: 'Create your own perfect meal',
  type: 'sides',
  moduleName: 'sides-row',
  moduleId: 2,
  collections,
  onAddItem: () => {},
  onRemoveItem: () => {},
  onMealClick: () => {},
  onSeeAllClick: () => {},
  onShowTracking: () => {},
  onClickTracking: () => {},
  onAddTracking: () => {},
  onSwipeTracking: () => {},
  onSeeAllTracking: () => {}
}
