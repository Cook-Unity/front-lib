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

export const Notification = Template.bind({})
Notification.args = {
  notification: true,
  smallSize: true
}

export const NotificationNoBorder = Template.bind({})
NotificationNoBorder.args = {
  notification: true,
  smallSize: true,
  style: {content: {'border-radius': 0}}
}
