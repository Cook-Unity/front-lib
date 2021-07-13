import {render, screen} from '@testing-library/react'
import React from 'react'
import userEvent from '@testing-library/user-event'

import SmartAppBanner from './index'

describe('SmartAppBanner', () => {
  const handleOnClickMock = () => 'ok'

  it('Required props', () => {
    render(
      <SmartAppBanner
        title="CookUnity iOS App"
        textButton="Use"
        handleOnClick={handleOnClickMock}
      />
    )
    expect(screen.getByText('CookUnity iOS App')).toBeVisible()
    expect(screen.getByText('Use')).toBeVisible()
  })

  it('Close banner by clicking button', () => {
    render(
      <SmartAppBanner
        title="CookUnity iOS App"
        subTitle="Eat well without effort"
        textButton="Use"
        handleOnClick={handleOnClickMock}
      />
    )
    userEvent.click(screen.getByTestId('button-close'))
    expect(screen.queryByTestId('smart-app-banner')).not.toBeInTheDocument()
  })
})
