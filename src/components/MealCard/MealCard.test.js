import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MealCard from './'
import {MealCardCase} from './MealCardCase'
import {formatChefName} from './utils'

import {meal_basic, meal_full} from './__mock__'

describe('MealCard component', () => {
  it('Required props', () => {
    render(<MealCard meal={meal_basic} />)
    const chefName = formatChefName(
      meal_basic.chef_firstname,
      meal_basic.chef_lastname
    )
    const mealImg = screen.getByTestId('meal-image')
    const chefImg = screen.getByTestId('chef-image')

    expect(screen.getByText(meal_basic.name)).toBeVisible()
    expect(screen.getByText(meal_basic.short_description)).toBeVisible()
    expect(screen.getByText(chefName)).toBeVisible()
    expect(screen.getByAltText(chefName)).toBeVisible()

    expect(mealImg)
      .toHaveStyle(`background-image: url(${meal_basic.full_path_meal_image})`)
      .toBeVisible()

    expect(chefImg)
      .toHaveAttribute('src', meal_basic.full_path_chef_image)
      .toBeVisible()
  })

  it('Full props', () => {
    render(<MealCard meal={meal_full} noExtraFee quantity={1} />)

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
    expect(screen.getByTestId('celeb-chef-img')).toBeVisible()
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

  it('Disable add item when theres no stock', () => {
    render(<MealCardCase meal={meal_full} quantity={3} />)
    userEvent.click(screen.getByTestId('quantity-btn'))
    expect(screen.getByTestId('add-btn')).toBeDisabled()
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
})
