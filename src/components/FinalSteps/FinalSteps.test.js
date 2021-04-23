import React from 'react'
import {render, screen} from '@testing-library/react'

import FinalSteps from './index'

const chefInstructions = ['First chef.', 'Second chef.']
const fastInstructions = ['First fast.', 'Second fast.']

const chefInstructionsStr = `1. ${chefInstructions[0]} 2. ${chefInstructions[1]}`
const fastInstructionsStr = `1. ${fastInstructions[0]} 2. ${fastInstructions[1]}`

describe('Product Page: FinalSteps', () => {
  const assertStaticText = () => {
    expect(screen.getByText('Chef Instructions:')).toBeVisible()
    expect(screen.getByText('Fast Instructions:')).toBeVisible()
    expect(screen.getByText('Enjoy it Warm!')).toBeVisible()
    expect(screen.getByText('Meals are delivered chilled')).toBeVisible()
    expect(
      screen.getByText('Containers are oven & microwave safe, lid is not safe.')
    ).toBeVisible()
    expect(screen.getByText('Scan the QR Code on your meal')).toBeVisible()
    expect(
      screen.getByText(
        'Find Heating instructions, Nutritional info, Expiration date'
      )
    ).toBeVisible()
  }

  it('Empty props', () => {
    jest.spyOn(console, 'error').mockImplementation(jest.fn())
    const {container} = render(<FinalSteps />)
    jest.spyOn(console, 'error').mockRestore()
    expect(container).toBeEmptyDOMElement()
  })

  it('Is loading', () => {
    render(
      <FinalSteps
        isLoading
        chefInstructions={chefInstructions}
        fastInstructions={fastInstructions}
      />
    )

    expect(screen.getAllByText(/.+/i)).toHaveLength(7)
  })

  it('With multiple steps (array)', () => {
    render(
      <FinalSteps
        isLoading={false}
        chefInstructions={chefInstructions}
        fastInstructions={fastInstructions}
      />
    )
    expect(screen.getByText('1. First chef.')).toBeVisible()
    expect(screen.getByText('2. Second chef.')).toBeVisible()

    expect(screen.getByText('1. First chef.')).toBeVisible()
    expect(screen.getByText('2. Second chef.')).toBeVisible()

    assertStaticText()
  })

  it('With multiple steps (string)', () => {
    render(
      <FinalSteps
        isLoading={false}
        chefInstructions={chefInstructionsStr}
        fastInstructions={fastInstructionsStr}
      />
    )

    expect(screen.getByText(`1. First chef.`)).toBeVisible()
    expect(screen.getByText(`2. Second chef.`)).toBeVisible()

    expect(screen.getByText(`1. First fast.`)).toBeVisible()
    expect(screen.getByText(`2. Second fast.`)).toBeVisible()

    assertStaticText()
  })
})
