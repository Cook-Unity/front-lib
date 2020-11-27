import React from 'react'
import {render, screen} from '@testing-library/react'
import MealCard from './'

const meal = {
  name: 'Spicy Roasted Eggplant',
  short_description: 'with yellow rice and tomatoes',
  chef_firstname: 'Jean-Georges',
  chef_lastname: 'Vongerichten',
  full_path_meal_image:
    'https://d1ureao5dcqpo4.cloudfront.net/media/catalog/product/cache/x600/w/a/wayan-eggplant.jpeg',
  full_path_chef_image:
    'https://d1ureao5dcqpo4.cloudfront.net/media/avatar/chef-1x169283.jpg'
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

    expect(mealImg).toHaveStyle(
      `background-image: url(${meal.full_path_meal_image})`
    )
    expect(mealImg).toBeVisible()

    expect(chefImg).toHaveAttribute('src', meal.full_path_chef_image)
    expect(chefImg).toBeVisible()
  })
})
