import * as React from 'react'
import {render} from '@testing-library/react'

import props from './data.mock'
import CuiMealCardsModal from './CuiMealCardsModal'

const defaultProps = {
  ...props,
  title: 'Th!5 !5 4 T!Tl3',
  isOpen: true
}

describe('Message modal', () => {
  describe('Check props', () => {
    it(`should have the props sent`, () => {
      const renderResult = render(
        <div id="root">
          <CuiMealCardsModal {...defaultProps} />
        </div>
      )

      expect(renderResult.getByTestId('title')).toHaveTextContent(
        defaultProps.title.toString()
      )
      expect(renderResult.getByTestId('subtitle')).toHaveTextContent(
        defaultProps.subtitle
      )
      expect(renderResult.getByTestId('cu-primary-button')).toHaveTextContent(
        defaultProps.primaryButtonText
      )
      expect(renderResult.getByTestId('cu-secondary-button')).toHaveTextContent(
        defaultProps.secondaryButtonText
      )
    })
  })

  describe('Props includes subtitle', () => {
    it(`should render subtitle`, () => {
      const subtitle = 'Th!5 !5 4 5u8T!t13'
      const renderResult = render(
        <div id="root">
          <CuiMealCardsModal {...defaultProps} subtitle={subtitle} />
        </div>
      )

      expect(renderResult.getByTestId('subtitle')).toHaveTextContent(
        subtitle.toString()
      )
    })
  })

  describe('Props does not include buttonText', () => {
    it('should not render button', () => {
      const renderResult = render(
        <div id="root">
          <CuiMealCardsModal {...defaultProps} primaryButtonText="" />
        </div>
      )

      expect(
        renderResult.queryByTestId('cu-primary-button')
      ).not.toBeInTheDocument()
    })
  })
})
