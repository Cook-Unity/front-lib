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
  with_user_rating,
  with_warnings,
  meal_no_image,
  out_of_stock,
  meal_new,
  meal_featured,
  new_chef
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
    expect(screen.getByText('Out of stock')).toBeVisible()

    expect(screen.getByTestId('chef-image'))
      .toHaveAttribute('src', meal_basic.full_path_chef_image)
      .toBeVisible()

    expect(screen.queryByAltText('heart')).not.toBeInTheDocument()
  })

  it('Full selected', () => {
    render(<MealCard meal={meal_full} noExtraFee quantity={1} isNew={false} />)

    expect(screen.getByText(meal_full.short_description)).toBeVisible()
    expect(screen.getByTestId('meal-image'))
      .toHaveAttribute('src', meal_full.full_path_meal_image)
      .toBeVisible()

    expect(screen.getByTestId('quantity-btn'))
      .toHaveTextContent('1')
      .toBeVisible()

    expect(screen.getByTestId('rating'))
      .toHaveTextContent('4.4 (999+)')
      .toBeVisible()

    expect(screen.queryByText('NEW')).not.toBeInTheDocument()

    expect(screen.queryByTestId('cart-controllers')).not.toBeInTheDocument()
    expect(screen.getByText(`${meal_full.calories} cal`)).toBeVisible()
    expect(screen.getByText('Spicy')).toBeVisible()
    expect(screen.getByAltText('Spicy')).toBeVisible()
    expect(screen.queryByTestId('celeb-chef-img')).not.toBeInTheDocument()
    expect(screen.getByText('+ $3.00')).toBeVisible()
    expect(screen.getByText('No extra fee today')).toBeVisible()
  })

  it('New meal', () => {
    render(<MealCard meal={meal_new} />)
    expect(screen.getByText('NEW')).toBeVisible()
    expect(screen.queryByTestId('rating')).not.toBeInTheDocument()
  })

  it('Featured', () => {
    render(<MealCard meal={meal_featured} />)
    expect(screen.getByText('THANKSGIVING'))
      .toHaveStyle({
        backgroundColor: meal_featured.feature.background,
        color: meal_featured.feature.color
      })
      .toBeVisible()
  })

  it('New chef', () => {
    render(<MealCard meal={new_chef} />)
    expect(screen.queryByText('NEW')).not.toBeInTheDocument()
    expect(screen.queryByTestId('rating')).toBeInTheDocument()
  })

  it('Click card', () => {
    const onClick = jest.fn()
    render(<MealCard meal={meal_full} onMealClick={onClick} />)
    userEvent.click(screen.getByTestId('meal-image'))
    userEvent.click(screen.getByText(meal_full.short_description))
    expect(onClick.mock.calls.length).toBe(2)
  })

  it('Click Chef image', () => {
    const onClick = jest.fn()
    render(<MealCard meal={meal_full} onChefClick={onClick} />)
    userEvent.click(screen.getByTestId('container-chef-image'))
    expect(onClick.mock.calls.length).toBe(1)
  })

  it('Is loading meal card', () => {
    render(<MealCard meal={meal_full} isLoading />)
    expect(screen.getByTestId('loading-container')).toBeVisible()
  })

  it('No editable', () => {
    render(<MealCardCase meal={out_of_stock} isEditable={false} />)
    expect(screen.queryByTestId('quantity-btn')).not.toBeInTheDocument()
    expect(screen.queryByText('Out of stock')).not.toBeInTheDocument()
    expect(screen.queryByText('+ $3.00')).not.toBeInTheDocument()
  })

  it("Disable add item when there's no more stock", () => {
    render(<MealCardCase meal={meal_full} quantity={3} />)
    userEvent.click(screen.getByTestId('quantity-btn'))
    expect(screen.getByTestId('add-btn')).toBeDisabled()
  })

  it('Out of stock', () => {
    render(<MealCardCase meal={out_of_stock} />)
    expect(screen.getByTestId('quantity-btn')).toBeDisabled()
    expect(screen.getByText('Out of stock')).toBeVisible()
    expect(screen.queryByText('Image coming soon')).not.toBeInTheDocument()
  })

  it('Meal image coming soon', () => {
    render(<MealCard meal={meal_no_image} />)
    expect(screen.getByText('Image coming soon')).toBeVisible()
    expect(screen.queryByText('Out of stock')).not.toBeInTheDocument()
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

  it('Favourite meal not marked', () => {
    render(<MealCard meal={meal_basic} buttonLike isLikeMarked={false} />)
    const heart = screen.getByAltText('heart')
    const button = screen.getByTestId('button-like')

    expect(heart).toHaveAttribute('src', images.emptyHeart).toBeVisible()
    userEvent.click(button)
  })

  it('Favourite meal marked', () => {
    render(<MealCard meal={meal_basic} buttonLike isLikeMarked />)
    const heart = screen.getByAltText('heart')
    const button = screen.getByTestId('button-like')

    expect(heart).toHaveAttribute('src', images.blackHeart).toBeVisible()
    userEvent.click(button)
  })

  it('With warnings (has Priority)', () => {
    const alertText = with_warnings.warning
    render(
      <MealCard
        meal={{...with_warnings, ...with_user_rating, ...meal_featured}}
        onWarnings
      />
    )
    expect(screen.queryByText(alertText)).not.toBeInTheDocument()
    userEvent.click(screen.getByAltText('alert'))
    expect(screen.getByText(alertText)).toBeVisible()
    expect(screen.queryByText('you rated 5')).not.toBeInTheDocument()
    expect(screen.queryByText('CHRISTMAS')).not.toBeInTheDocument()
  })

  it('With User Rating', () => {
    render(<MealCard meal={with_user_rating} />)
    expect(screen.getByText('you rated 5')).toBeVisible()
  })

  it('With Celebrity chef features', () => {
    render(<MealCard meal={meal_full} enableCelebrityFeatures />)
    expect(screen.getByTestId('celeb-chef-img')).toBeVisible()
  })
})
