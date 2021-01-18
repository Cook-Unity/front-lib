import React from 'react'

import {PROTEIN, getDietaryValue} from '../../modules/Macronutrients/utils'
import Gauge from './index'

export default {
  title: 'Gauge',
  component: Gauge
}

const Template = args => <Gauge {...args} />

export const Default = Template.bind({})

Default.args = {
  progress: getDietaryValue(37, PROTEIN),
  unit: 'dv'
}
