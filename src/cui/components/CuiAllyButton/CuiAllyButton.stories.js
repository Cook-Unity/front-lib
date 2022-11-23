import React from 'react'

import CuiAllyButton from './CuiAllyButton'

export default {
  title: 'Cui / CuiAllyButton',
  component: CuiAllyButton
}

const Template = args => <CuiAllyButton {...args}>Link</CuiAllyButton>

export const Default = Template.bind({})
Default.args = {}
