import React from 'react'

import ReviewsModal from './index'

export default {
  title: 'ReviewsModal',
  component: ReviewsModal
}

const Template = args => <ReviewsModal {...args} />

export const Default = Template.bind({})
Default.args = {
  product: {
    stars: 3
  },
  quantity: 298,
  reviews: [
    {
      created_at: '2020-10-16 03:53:04',
      customer_id: '73211',
      customer_name: 'Daniel',
      detail: 'Very delicious and filling!',
      detail_id: 69525,
      entity_id: 1,
      entity_pk_value: 3169,
      image:
        'http://mage.qa.cookunity.com/skin/frontend/rwd/default/images/brocoli.png',
      nickname: 'Daniel Dorga',
      rating: '100.0000',
      review_id: 70662,
      reviews: '81',
      stars: '5.00000000',
      status_id: 1,
      title: 'Very delicious and filling! '
    },
    {
      created_at: '2020-10-05 23:54:25',
      customer_id: '76271',
      customer_name: 'Victor',
      detail: 'taste',
      detail_id: 67660,
      entity_id: 1,
      entity_pk_value: 3169,
      image:
        'http://mage.qa.cookunity.com/skin/frontend/rwd/default/images/brocoli.png',
      nickname: 'Victor Kuo',
      rating: '100.0000',
      review_id: 68797,
      reviews: '81',
      stars: '5.00000000',
      status_id: 1,
      title: 'taste '
    }
  ],
  name: 'Contains Nuts',
  image:
    'https://d1ureao5dcqpo4.cloudfront.net/media/avatar/JGV-PERFIL95396.png',
  component_code: 'hola',
  description: 'chau',
  isOpen: true,
  onRequestClose: () => console.log('hola'),
  handleClick: () => console.log('hola')
}
