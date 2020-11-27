import React from 'react'
import {render, screen} from '@testing-library/react'
import MealCard from './'

const meal = {
  name: 'Spicy Roasted Eggplant',
  short_description: 'with yellow rice and tomatoes',
  chef_firstname: 'Jean-Georges',
  chef_lastname: 'Vongerichten',
  full_path_meal_image: 'meal-image-url',
  full_path_chef_image: 'chef-image-url'
}

describe('MealCard component', () => {
  it('Check required props', () => {
    render(<MealCard meal={meal} />)
    const mealImg = screen.getByTestId('meal-image')
    const chefImg = screen.getByTestId('chef-image')

    expect(screen.getByText(meal.name)).toBeVisible()
    expect(screen.getByText(meal.short_description)).toBeVisible()
    expect(
      screen.getByText(`${meal.chef_firstname} ${meal.chef_lastname}`)
    ).toBeVisible()

    expect(mealImg)
      .toHaveStyle(`background-image: url(${meal.full_path_meal_image})`)
      .toBeVisible()

    expect(chefImg)
      .toHaveAttribute('src', meal.full_path_chef_image)
      .toBeVisible()
  })

  it('chef name formatting', () => {})
})
