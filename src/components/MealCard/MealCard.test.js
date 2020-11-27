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

const mealExtras = {
  calories: 430,
  meat_type: 'Vegan',
  reviews: 1250,
  stars: 4.3715,
  is_celebrity_chef: true,
  premium_fee: 3.0,
  fixed_price: false,
  feature: {
    name: 'NEW',
    background: '#4D4D4F',
    color: '#FFFFFF'
  }
}

const mealExtended = {
  ...meal,
  ...mealExtras
}

describe('MealCard component', () => {
  it('Required props', () => {
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

  it('Extra attributes', () => {
    render(<MealCard meal={mealExtended} noExtraFee />)
    const featureElem = screen.getByText('NEW')

    expect(screen.getByText(`${mealExtended.calories} cal`)).toBeVisible()
    expect(screen.getByText(mealExtended.meat_type)).toBeVisible()
    expect(screen.getByTestId('rating')).toHaveTextContent('★ 4.4 (999+)')
    expect(screen.getByTestId('celeb-chef-img')).toBeVisible()
    expect(screen.getByText('+ $3.00')).toBeVisible()
    expect(screen.getByText('No extra fee today')).toBeVisible()
    expect(featureElem)
      .toHaveStyle({
        backgroundColor: mealExtras.feature.background,
        color: mealExtras.feature.color
      })
      .toBeVisible()
  })
})
