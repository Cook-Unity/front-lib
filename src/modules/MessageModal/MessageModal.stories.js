import React from 'react'
import MessageModal from '.'
import MealImage from '../../common/MealImage'

import props from './__mock__'

export default {
  title: 'MenuBy/MessageModal',
  component: MessageModal
}

const Template = args => (
  <div>
    <MealImage {...args} /> <MessageModal {...args} />
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
