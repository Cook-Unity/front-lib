import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import images from '../../assets/images'

import MealImage from './'

describe('MealImage', () => {
  const comingSoon = 'Image coming soon'
  it('With valid image', () => {
    const onMealClick = jest.fn()
    render(
      <MealImage
        imageUrl="meal-image.jpg"
        onMealClick={onMealClick}
        classNameImage="class-image"
      />
    )

    const imgElem = screen.getByRole('img')
    expect(imgElem)
      .toHaveAttribute('src', 'meal-image.jpg')
      .toHaveAttribute('class', 'class-image')
    userEvent.click(imgElem)
    expect(onMealClick).toBeCalledTimes(1)
  })

  it('With no image', () => {
    render(<MealImage imageUrl="/no-image" />)

    const imgElem = screen.getByRole('img')
    expect(imgElem).toHaveAttribute('src', images.noMealImg)
    expect(screen.getByText(comingSoon)).toBeVisible()
  })

  it('With no coming soon text', () => {
    render(<MealImage imageUrl="/no-image" withoutText />)
    expect(screen.queryByText(comingSoon)).not.toBeInTheDocument()
  })
})
