import React from 'react'
import {CuiIconNames} from '../CuiIcon/icons'
import CuiTag from './CuiTag'

export default {
  title: 'Cui / CuiTag',
  component: CuiTag,
  argTypes: {
    icon: CuiIconNames,
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
    }
  }
}

const Template = args => <CuiTag {...args}>Tag</CuiTag>
const Template2 = args => <CuiTag {...args} />

export const Olive = Template.bind({})
Olive.args = {
  color: 'olive',
  icon: 'star'
}
export const Wine = Template.bind({})
Wine.args = {
  color: 'wine',
  icon: 'star'
}
export const Dark = Template.bind({})
Wine.args = {
  color: 'dark',
  icon: 'star'
}
export const White = Template.bind({})
White.args = {
  color: 'white',
  icon: 'star'
}
export const Yellow = Template.bind({})
Yellow.args = {
  color: 'yellow',
  icon: ''
}
export const Alone = Template2.bind({})
Alone.args = {
  color: 'dark',
  icon: 'star'
}

export const NoIcon = Template.bind({})
NoIcon.args = {
  color: 'dark',
  icon: ''
}

export const Disabled = Template.bind({})
Disabled.args = {
  color: 'grey',
  icon: ''
}

export const Trash = Template2.bind({})
Trash.args = {
  color: 'dark',
  icon: 'trash'
}
