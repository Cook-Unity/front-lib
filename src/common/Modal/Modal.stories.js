import React from 'react'

import Modal from './index'

export default {
  title: 'Modal',
  component: Modal
}

const Template = args => (
  <Modal isOpen {...args}>
    <div>hello world!</div>
  </Modal>
)

export const Default = Template.bind({})
Default.args = {}

export const PlusSize = Template.bind({})
PlusSize.args = {
  plusSize: true
}

export const MediumSize = Template.bind({})
MediumSize.args = {
  mediumSize: true
}

export const SmallSize = Template.bind({})
SmallSize.args = {
  smallSize: true
}

export const WithoutCloseIcon = Template.bind({})
WithoutCloseIcon.args = {
  withCloseIcon: false
}

export const SmallNotification = Template.bind({})
SmallNotification.args = {
  type: 'notification',
  smallSize: true
}
