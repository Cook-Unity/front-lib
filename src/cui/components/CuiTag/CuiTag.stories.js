import React from 'react'
import CuiIcon from '../CuiIcon/CuiIcon'
import {CuiIconNames} from '../CuiIcon/icons'
import CuiTag from './CuiTag'

export default {
  title: 'Cui / Components / CuiTag',
  component: CuiTag,
  argTypes: {
    color: {
      control: 'select',
      options: [
        'olive',
        'wine',
        'dark',
        'white',
        'yellow',
        'red',
        'grey',
        'blue'
      ]
    },
    size: {
      control: 'select',
      options: ['xsmall', 'small', 'medium', 'large']
    },
    fill: {
      control: 'select',
      options: ['solid']
    },
    type: {
      control: 'select',
      options: ['tag']
    },
    icon: {
      ...CuiIconNames
    }
  },
  args: {
    color: 'olive',
    size: 'small',
    fill: 'solid',
    type: 'tag',
    icon: null
  }
}

const DefaultTemplate = args => {
  const {icon, ...props} = args
  return (
    <CuiTag {...props}>
      {icon && <CuiIcon name={icon} />}
      Tag
    </CuiTag>
  )
}
export const Default = DefaultTemplate.bind({})
