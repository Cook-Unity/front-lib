import React from 'react'

import CuiMealSummary from './CuiMealSummary'

export default {
  title: 'Cui / Modules / CuiMealCard / Components / CuiMealSummary',
  component: CuiMealSummary
}

const Template = args => <CuiMealSummary price={11.99} quantity={10} />
export const Default = Template.bind({})
