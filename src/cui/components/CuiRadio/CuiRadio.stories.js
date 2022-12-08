import React, {useState} from 'react'

import CuiRadio from './CuiRadio'

export default {
  title: 'Cui / Components / CuiRadio',
  component: CuiRadio
}

const Template = args => {
  const [state, setState] = useState()
  return (
    <>
      <CuiRadio
        {...args}
        value={1}
        checked={state === 1}
        onClick={() => setState(1)}
      >
        Test 1
      </CuiRadio>
      <CuiRadio
        {...args}
        value={2}
        checked={state === 2}
        onClick={() => setState(2)}
      >
        Test 2
      </CuiRadio>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  name: 'option'
}
