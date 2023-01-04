import React from 'react'

import CuiPopUp from './CuiPopUp'

export default {
  title: 'Cui / Modules / CuiPopUp',
  component: CuiPopUp
}

const Template = args => <CuiPopUp {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Let’s get personal.',
  image:
    'https://cu-product-media.s3.amazonaws.com/media/happy-path/set-preferences-modal-mobile.png',
  description:
    'Set your preferences so we know what you love — and what you don’t. We’ll use your info to offer recommendations based on the foods you actually want.',
  isOpen: true,
  btnConfirmText: 'Set preferences',
  btnCancelText: 'Continue Ordering',
  handleClose: () => console.log('closed!'),
  handleCancel: () => console.log('canceled!'),
  handleConfirm: () => console.log('hi!')
}

export const CheckRecommendation = Template.bind({})
CheckRecommendation.args = {
  title: 'We filled your cart for you',
  image:
    'https://cu-product-media.s3.amazonaws.com/media/happy-path/autopilot-modal-desktop.png',
  description:
    'Your ordering window is closing soon, so we filled your cart for you. You can still edit and confirm your order until <time>. Happy eating!',
  isOpen: true,
  btnConfirmText: 'View cart ',
  handleConfirm: () => console.log('hi!')
}

export const Flexibility = Template.bind({})
Flexibility.args = {
  title: 'Flexible plans, no commitments.',
  image:
    'https://cu-product-media.s3.amazonaws.com/media/happy-path/flexibility-modal-mobile.png',
  description:
    'Our weekly plans are flexible and easy to change. Just head to your account settings to make changes anytime you need to.',
  isOpen: true,
  btnConfirmText: 'My account ',
  btnCancelText: 'Continue Ordering',
  handleClose: () => console.log('closed!'),
  handleCancel: () => console.log('canceled!'),
  handleConfirm: () => console.log('hi!')
}

export const Rating = Template.bind({})
Rating.args = {
  title: 'How did everything taste?',
  image:
    'https://cu-product-media.s3.amazonaws.com/media/happy-path/rating-modal-mobile.png',
  description:
    'Our chefs rely on your feedback to make their meals exceptional. Go ahead and tell them how they did. They’re chefs — they can take the heat.',
  isOpen: true,
  btnConfirmText: 'Rate your meals',
  btnCancelText: 'Continue Ordering',
  handleClose: () => console.log('closed!'),
  handleCancel: () => console.log('canceled!'),
  handleConfirm: () => console.log('hi!')
}
