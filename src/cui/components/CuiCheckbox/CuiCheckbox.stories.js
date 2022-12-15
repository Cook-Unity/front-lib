import React, {useState} from 'react'

import CuiCheckbox from './CuiCheckbox'

export default {
  title: 'Cui / Components / CuiCheckbox',
  component: CuiCheckbox
}

const Template = args => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <CuiCheckbox
      id="id"
      name="name"
      value="value"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
    >
      CuiCheckbox
    </CuiCheckbox>
  )
}

export const Default = Template.bind({})
Default.args = {}
