import React, {useState} from 'react'

import Radio from './index'

export default {
  title: 'Radio',
  component: Radio
}

const Template = args => {
  const [state, setState] = useState()
  return (
    <>
      <Radio
        {...args}
        value={1}
        checked={state === 1}
        onClick={() => setState(1)}
      >
        Test 1
      </Radio>
      <Radio
        {...args}
        value={2}
        checked={state === 2}
        onClick={() => setState(2)}
      >
        Test 2
      </Radio>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  name: 'option'
}
