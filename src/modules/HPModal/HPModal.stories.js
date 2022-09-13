import React from 'react'

import HPModal from './index'

export default {
  title: 'HPModal',
  component: HPModal
}

const Template = args => <HPModal {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Let’s get personal.',
  image:
    'https://cu-product-media.s3.amazonaws.com/media/happy-path/preferences_modal.png',
  description:
    'Setting your preferenecs helps us personalize your menus. Let us know what you like — and don’t — and we’ll make sure the right meals make it to your table. ',
  isOpen: true,
  btnConfirmText: 'Set preferences',
  btnCancelText: 'Continue Ordering',
  btnSize: 'small',
  handleClose: () => console.log('closed!'),
  handleCancel: () => console.log('canceled!'),
  handleClick: () => console.log('hi!')
}
