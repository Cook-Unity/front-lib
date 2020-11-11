import React from 'react'

import Modal from './index'

export default {
  title: 'Modal',
  component: Modal
}

const Template = args => (
  <Modal withCloseIcon isOpen>
    <div>hello world!</div>
  </Modal>
)

export const Default = Template.bind({})
Default.args = {}
