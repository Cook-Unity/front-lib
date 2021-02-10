import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MealCard from './'
import {MealCardCase} from './MealCardCase'
import {formatChefName} from './utils'
import images from '../../assets/images'

import {
  meal_basic,
  meal_full,
  withUserRating,
  withWarnings,
  meal_no_image
} from './__mock__'

describe('MealCard component', () => {
  it('Required props', () => {
    render(<MealCard meal={meal_basic} />)
    const chefName = formatChefName(
      meal_basic.chef_firstname,
      meal_basic.chef_lastname
    )

    expect(screen.getByText(meal_basic.name)).toBeVisible()
    expect(screen.getByText(chefName)).toBeVisible()
    expect(screen.getByAltText(chefName)).toBeVisible()
    expect(screen.queryByAltText('heart')).not.toBeInTheDocument()

    expect(screen.getByTestId('chef-image'))
      .toHaveAttribute('src', meal_basic.full_path_chef_image)
      .toBeVisible()
  })

  it('Full props', () => {
    render(<MealCard meal={meal_full} noExtraFee quantity={1} />)

    expect(screen.getByText(meal_full.short_description)).toBeVisible()
    expect(screen.getByTestId('meal-image'))
      .toHaveStyle(`background-image: url(${meal_full.full_path_meal_image})`)
      .toBeVisible()

    expect(screen.getByText('NEW'))
      .toHaveStyle({
        backgroundColor: meal_full.feature.background,
        color: meal_full.feature.color
      })
      .toBeVisible()

    expect(screen.getByTestId('quantity-btn'))
      .toHaveTextContent('1')
      .toBeVisible()

    expect(screen.queryByTestId('cart-controllers')).not.toBeInTheDocument()
    expect(screen.getByText(`${meal_full.calories} cal`)).toBeVisible()
    expect(screen.getByText('Seafood')).toBeVisible()
    expect(screen.getByText('Spicy')).toBeVisible()
    expect(screen.getByAltText('Spicy')).toBeVisible()
    expect(screen.getByTestId('rating'))
      .toHaveTextContent('4.4 (999+)')
      .toBeVisible()
    expect(screen.queryByTestId('celeb-chef-img')).not.toBeInTheDocument()
    expect(screen.getByText('+ $3.00')).toBeVisible()
    expect(screen.getByText('No extra fee today')).toBeVisible()
  })

  it('Click card', () => {
    const onClick = jest.fn()
    render(<MealCard meal={meal_full} onClick={onClick} />)
    userEvent.click(screen.getByTestId('meal-image'))
    userEvent.click(screen.getByText(meal_full.short_description))
    expect(onClick.mock.calls.length).toBe(2)
  })

  it('No editable', () => {
    render(<MealCardCase meal={meal_full} isEditable={false} />)
    expect(screen.queryByTestId('quantity-btn')).not.toBeInTheDocument()
  })

  it("Disable add item when there's no more stock", () => {
    render(<MealCardCase meal={meal_full} quantity={3} />)
    userEvent.click(screen.getByTestId('quantity-btn'))
    expect(screen.getByTestId('add-btn')).toBeDisabled()
  })

  it('Meal stock is zero', () => {
    const meal = {
      ...meal_full,
      stock: 0
    }
    render(<MealCardCase meal={meal} />)
    expect(screen.getByTestId('quantity-btn')).toBeDisabled()
  })

  it('Add/remove quantities', async () => {
    render(<MealCardCase meal={meal_full} quantity={2} />)
    userEvent.click(screen.getByTestId('quantity-btn'))
    userEvent.click(screen.getByTestId('remove-btn'))
    expect(screen.getByTestId('quantity')).toHaveTextContent('1')
    userEvent.click(screen.getByTestId('add-btn'))
    userEvent.click(screen.getByTestId('add-btn'))
    expect(screen.getByTestId('quantity')).toHaveTextContent('3')
    userEvent.click(screen.getByTestId('remove-btn'))
    userEvent.click(screen.getByTestId('remove-btn'))
    userEvent.click(screen.getByTestId('remove-btn'))
    expect(screen.getByTestId('quantity-btn')).toContainElement(
      screen.getByTestId('plus-img')
    )
  })

  it('Meal image coming soon', () => {
    render(<MealCardCase meal={meal_no_image} />)
    expect(screen.getByText('Image coming soon')).toBeVisible()
  })

  it('Favourite meal', () => {
    render(<MealCard meal={meal_basic} buttonLike />)
    const heart = screen.getByAltText('heart')
    expect(heart).toHaveAttribute('src', images.emptyHeart).toBeVisible()
    userEvent.click(heart)
    expect(heart).toHaveAttribute('src', images.blackHeart).toBeVisible()
  })

  it('With warnings', () => {
    const alertText = withWarnings.warning
    render(<MealCard meal={withWarnings} onWarnings />)
    expect(screen.getByText('3 allergens')).toBeVisible()
    expect(screen.queryByText(alertText)).not.toBeInTheDocument()
    userEvent.click(screen.getByAltText('alert'))
    expect(screen.getByText('3 allergens')).toBeVisible()
    expect(screen.getByText(alertText)).toBeVisible()
  })

  it('With User Rating', () => {
    render(<MealCard meal={withUserRating} />)
    expect(screen.getByText('you rated 5')).toBeVisible()
  })

  it('With Celebrity chef features', () => {
    render(<MealCard meal={meal_full} enableCelebrityFeatures />)
    expect(screen.getByTestId('celeb-chef-img')).toBeVisible()
  })
})
