import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MealCard from './'
import {MealCardSimple} from './MealCardExtensions'

import {meal_basic, meal_extras, meal_full} from './__mock__'

const mealExtended = {
  ...meal_basic,
  ...meal_extras,
  ...meal_full
}

describe('MealCard component', () => {
  it('Required props', () => {
    render(<MealCard meal={meal_basic} />)
    const mealImg = screen.getByTestId('meal-image')
    const chefImg = screen.getByTestId('chef-image')

    expect(screen.getByTestId('quantityBtn'))
      .toHaveTextContent('+')
      .toBeVisible()
    expect(screen.queryByTestId('cart-controllers')).not.toBeInTheDocument()
    expect(screen.getByText(meal_basic.name)).toBeVisible()
    expect(screen.getByText(meal_basic.short_description)).toBeVisible()
    expect(
      screen.getByText(
        `${meal_basic.chef_firstname} ${meal_basic.chef_lastname}`
      )
    ).toBeVisible()

    expect(mealImg)
      .toHaveStyle(`background-image: url(${meal_basic.full_path_meal_image})`)
      .toBeVisible()

    expect(chefImg)
      .toHaveAttribute('src', meal_basic.full_path_chef_image)
      .toBeVisible()
  })

  it('Extra props', () => {
    const onClick = jest.fn()
    render(
      <MealCard meal={mealExtended} noExtraFee quantity={1} onClick={onClick} />
    )
    const featureElem = screen.getByText('NEW')

    expect(screen.getByTestId('quantityBtn'))
      .toHaveTextContent('1')
      .toBeVisible()
    expect(screen.queryByTestId('cart-controllers')).not.toBeInTheDocument()
    expect(screen.getByText(`${mealExtended.calories} cal`)).toBeVisible()
    expect(screen.getByText(mealExtended.meat_type)).toBeVisible()
    expect(screen.getByTestId('rating'))
      .toHaveTextContent('★ 4.4 (999+)')
      .toBeVisible()
    expect(screen.getByTestId('celeb-chef-img')).toBeVisible()
    expect(screen.getByText('+ $3.00')).toBeVisible()
    expect(screen.getByText('No extra fee today')).toBeVisible()
    expect(featureElem)
      .toHaveStyle({
        backgroundColor: mealExtended.feature.background,
        color: mealExtended.feature.color
      })
      .toBeVisible()

    userEvent.click(screen.getByTestId('meal-image'))
    expect(onClick).toHaveBeenCalled()
  })

  it('Click card', () => {
    const onClick = jest.fn()
    render(<MealCard meal={mealExtended} onClick={onClick} />)
    userEvent.click(screen.getByTestId('meal-image'))
    expect(onClick).toHaveBeenCalled()
  })

  it('No editable', () => {
    render(<MealCardSimple meal={meal_basic} isEditable={false} />)
    expect(screen.queryByTestId('quantityBtn')).not.toBeInTheDocument()
  })

  it('Disable add item when theres no stock', () => {
    render(<MealCardSimple meal={meal_basic} quantity={3} />)
    userEvent.click(screen.getByTestId('quantityBtn'))
    userEvent.click(screen.getByText('+'))
    expect(screen.getByText('+')).toBeDisabled()
  })

  it.skip('Add/remove quantities', async () => {
    render(<MealCardSimple meal={meal_basic} quantity={2} />)
    userEvent.click(screen.getByTestId('quantityBtn'))
    userEvent.click(screen.getByText('-'))
    expect(screen.getByTestId('quantity')).toHaveTextContent('1')
    userEvent.click(screen.getByText('+'))
    userEvent.click(screen.getByText('+'))
    expect(screen.getByTestId('quantity')).toHaveTextContent('3')
    userEvent.click(screen.getByText('-'))
    userEvent.click(screen.getByText('-'))
    userEvent.click(screen.getByText('-'))
    expect(screen.getByTestId('quantityBtn')).toHaveTextContent('+')
  })
})
