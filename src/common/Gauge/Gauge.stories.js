import React from 'react'

import Gauge from './index'

export default {
  title: 'Gauge',
  component: Gauge
}

const Template = args => <Gauge {...args} />

export const Default = Template.bind({})
Default.args = {
  protein: 20,
  carbs: 30,
  fat: 20,
  calories: 29,
  dv: 2
}
