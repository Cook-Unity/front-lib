import React from 'react'
import CuiMessageModal from './CuiMessageModal'
import MealImage from '../../../common/MealImage'

import props from './data.mock.js'

export default {
  title: 'Cui/modules/CuiMessageModal',
  component: CuiMessageModal
}

const Template = args => (
  <div>
    <MealImage {...args} /> <CuiMessageModal {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  ...props,
  isOpen: true
}

export const WithCloseIcon = Template.bind({})
WithCloseIcon.args = {
  ...props,
  isOpen: true,
  withCloseIcon: true
}
