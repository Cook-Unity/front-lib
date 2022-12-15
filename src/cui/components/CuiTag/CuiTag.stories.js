import React from 'react'
import CuiIcon from '../CuiIcon/CuiIcon'
import {CuiIconNames} from '../CuiIcon/icons'
import CuiTag from './CuiTag'

export default {
  title: 'Cui / Components / CuiTag',
  component: CuiTag,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['olive', 'wine', 'dark', 'white', 'yellow']
      },
      defaultValue: 'olive'
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      },
      defaultValue: 'small'
    },
    fill: {
      control: {
        type: 'select',
        options: ['solid']
      },
      defaultValue: 'solid'
    },
    type: {
      control: {
        type: 'select',
        options: ['tag']
      },
      defaultValue: 'tag'
    },
    icon: {
      ...CuiIconNames,
      defaultValue: null
    }
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
