import React from 'react'

import CuiBreadcrumb from './CuiBreadcrumb'

export default {
  title: 'Cui / CuiBreadcrumb',
  component: CuiBreadcrumb
}

const Template = args => <CuiBreadcrumb {...args}>Link</CuiBreadcrumb>

export const Default = Template.bind({})
Default.args = {}
