import React from 'react'
import Ingredients from './Ingredients'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import {ingredients} from './data.mock'

const getIngredients = props => (
  <div id="root">
    <Ingredients {...props} />
  </div>
)

describe('Ingredients', () => {
  // eslint-disable-next-line jest/expect-expect
  it('renders without exploding', () => {
    render(getIngredients({}))
  })

  it('Ingredients with details', () => {
    render(getIngredients({ingredients}))
    expect(screen.getByText('Ingredients')).toBeVisible()
    expect(screen.getByText(ingredients[0].name)).toBeVisible()
    expect(screen.getByText(ingredients[1].name)).toBeVisible()
    userEvent.click(screen.getByText(ingredients[0].name))
    expect(screen.getByText(ingredients[0].description)).toBeVisible()
  })

  it('Ingredients without details', () => {
    render(getIngredients({ingredients, withDetails: false}))
    expect(screen.getByText(ingredients[0].name)).toBeVisible()
    expect(screen.getByText(ingredients[1].name)).toBeVisible()
    userEvent.click(screen.getByText(ingredients[0].name))
    expect(
      screen.queryByText(ingredients[0].description)
    ).not.toBeInTheDocument()
  })
})
