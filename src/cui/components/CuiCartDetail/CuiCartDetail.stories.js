import React from 'react'

import CuiCartDetail from './CuiCartDetail'

export default {
  title: 'Cui / Modules / CuiCartDetail',
  component: CuiCartDetail,
  argTypes: {
    loading: {
      control: 'boolean'
    }
  },
  args: {
    loading: false
  }
}

const DefaultTemplate = args => <CuiCartDetail {...args} />

export const Default = DefaultTemplate.bind({})
Default.args = {
  qy: 0
}
