import React from 'react'
import CuiCardContent from '../CuiCardContent/CuiCardContent'
import CuiImage from '../CuiImage/CuiImage'

import CuiCard from './CuiCard'

export default {
  title: 'Cui / Components / CuiCard',
  component: CuiCard,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['dark', 'light']
      },
      defaultValue: 'dark'
    }
  }
}

const Template = args => {
  return (
    <CuiCard {...args}>
      <CuiImage
        src="https://d1ureao5dcqpo4.cloudfront.net/media/merchandiseSets/chef-akhtar-chicken-tinga-tacos.jpg"
        title="image"
      />
      <CuiCardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
      </CuiCardContent>
    </CuiCard>
  )
}

export const Default = Template.bind({})
