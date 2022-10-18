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
  title: 'You got your first recommendation!',
  image:
    'https://cu-product-media.s3.amazonaws.com/media/happy-path/preferences_modal.png',
  description:
    'Brief explain about how the reco & Autopilot works, and reforce the idea of setting prefrences to recieve a reco focus on your needs.',
  isOpen: true,
  btnConfirmText: 'Check Recommendation',
  handleClose: () => console.log('closed!'),
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
