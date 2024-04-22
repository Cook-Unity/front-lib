import React from 'react'

import CuiModal from './CuiModal'

export default {
  title: 'CuiModal',
  component: CuiModal
}

const Template = args => (
  <div id="root" style={{height: '300px'}}>
    <CuiModal isOpen {...args}>
      <div>Hello world!</div>
    </CuiModal>
  </div>
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
