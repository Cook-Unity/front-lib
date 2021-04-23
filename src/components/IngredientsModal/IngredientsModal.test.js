import * as React from 'react'
import {render} from '@testing-library/react'

import selectedIngredient from './data.mock'
import IngredientsModal from './IngredientsModal'

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
