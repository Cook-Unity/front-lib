import React, {useState} from 'react'
import CuiSegmentButton from '../CuiSegmentButton/CuiSegmentButton'

import CuiSegment from './CuiSegment'

export default {
  title: 'Cui / Components / CuiSegment',
  component: CuiSegment,
  argTypes: {
    color: {
      control: 'select',
      options: ['dark', 'light']
    }
  },
  args: {
    color: 'dark'
  }
}

const items = [
  {label: 'Orders', value: 1},
  {label: 'Preferences', value: 2},
  {label: 'Past Deliveries', value: 3},
  {label: 'FAQs', value: 4},
  {label: 'Messages', value: 5}
]

const Template = args => {
  const [activeButton, setActiveButton] = useState(1)

  return (
    <div
      style={{
        padding: '20px',
        background: args.color === 'dark' ? 'white' : 'black',
        borderRadius: '5px'
      }}
    >
      <CuiSegment {...args}>
        {items.map(item => (
          <CuiSegmentButton
            key={item.value}
            active={activeButton === item.value}
            onClick={() => setActiveButton(item.value)}
          >
            {item.label}
          </CuiSegmentButton>
        ))}
      </CuiSegment>
    </div>
  )
}

export const Default = Template.bind({})
