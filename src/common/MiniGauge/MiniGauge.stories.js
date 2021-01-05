import React from 'react'

import MiniGauge from './index'

export default {
  title: 'MiniGauge',
  component: MiniGauge
}

const Template = args => <MiniGauge {...args} />

export const Default = Template.bind({})
Default.args = {}
