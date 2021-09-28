import {render, screen} from '@testing-library/react'
import React from 'react'
import userEvent from '@testing-library/user-event'

import CollectionMealHeader from './index'

const IMAGE =
  'https://d1ureao5dcqpo4.cloudfront.net/media/merchandiseSets/chef-akhtar-chicken-tinga-tacos.jpg'

describe('CollectionMealHeader', () => {
  const handleOnClickMock = callback => callback()

  it('Required props', () => {
    render(<CollectionMealHeader title="From the Sea" image={IMAGE} />)
    expect(screen.getByText('From')).toBeVisible()
    expect(screen.getByText('the Sea')).toBeVisible()
  })

  it('Updated Weekly', () => {
    render(
      <CollectionMealHeader
        title="From the Sea"
        image={IMAGE}
        backgroundColor="#F6E1D6"
        updatedWeekly
      />
    )
    expect(screen.getByText('UPDATED WEEKLY')).toBeVisible()
  })

  it('Click in the view all', () => {
    const clickMock = jest.fn()
    render(
      <CollectionMealHeader
        title="From the Sea"
        image={IMAGE}
        backgroundColor="#F6E1D6"
        updatedWeekly
        handleOnClick={() => handleOnClickMock(clickMock)}
      />
    )
    userEvent.click(screen.getByTestId('view-all'))
    expect(clickMock).toHaveBeenCalled()
  })
})
