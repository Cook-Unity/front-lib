import * as React from 'react'
import {render} from '@testing-library/react'

import defaultPropsMock from './__mock__.json'
import IngredientsModal from './IngredientsModal'

const selectedIngredient = defaultPropsMock.mealDetail.ingredients[0]

const defaultProps = {
  selectedIngredient,
  isOpen: true,
  onRequestClose: () => {}
}

describe('Specifications component', () => {
  describe('Checking name', () => {
    it(`Check than ${defaultProps.name} is contain in the component`, () => {
      const renderResult = render(
        <div id="root">
          <IngredientsModal {...defaultProps} />
        </div>
      )

      expect(
        renderResult.queryByText(selectedIngredient.name)
      ).toBeInTheDocument()
    })
  })
})
