import {render, screen} from '@testing-library/react'
import React from 'react'
import userEvent from '@testing-library/user-event'

import CollectionMealsCard from './index'

const IMAGE =
  'https://d1ureao5dcqpo4.cloudfront.net/media/merchandiseSets/chef-akhtar-chicken-tinga-tacos.jpg'

describe('CollectionMealsCard', () => {
  const handleOnClickMock = callback => callback()

  it('Required props', () => {
    render(<CollectionMealsCard title="From the Sea" image={IMAGE} />)
    expect(screen.getByText('From')).toBeVisible()
    expect(screen.getByText('the Sea')).toBeVisible()
  })

  it('Click in the container', () => {
    const clickMock = jest.fn()
    render(
      <CollectionMealsCard
        title="From the Sea"
        image={IMAGE}
        backgroundColor="#F6E1D6"
        updatedWeekly
        handleOnClick={() => handleOnClickMock(clickMock)}
      />
    )
    userEvent.click(screen.getByTestId('collection-meals-card'))
    expect(clickMock).toHaveBeenCalled()
  })

  it('Click in the image', () => {
    const clickMock = jest.fn()
    render(
      <CollectionMealsCard
        title="From the Sea"
        image={IMAGE}
        backgroundColor="#F6E1D6"
        updatedWeekly
        handleOnClick={() => handleOnClickMock(clickMock)}
      />
    )
    userEvent.click(screen.getByTestId('image-meal-card'))
    expect(clickMock).toHaveBeenCalled()
  })
})
