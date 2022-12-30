import * as React from 'react'
import {render} from '@testing-library/react'

import props from './data.mock'
import CuiMessageModal from './CuiMessageModal'

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
          <CuiMessageModal {...defaultProps} />
        </div>
      )

      expect(renderResult.getByTestId('title')).toHaveTextContent(
        defaultProps.title.toString()
      )
      expect(renderResult.getByTestId('text')).toHaveTextContent(
        defaultProps.text
      )
      expect(renderResult.getByTestId('cu-button')).toHaveTextContent(
        defaultProps.buttonText
      )
    })
  })

  describe('Props includes subtitle', () => {
    it(`should render subtitle`, () => {
      const subtitle = 'Th!5 !5 4 5u8T!t13'
      const renderResult = render(
        <div id="root">
          <CuiMessageModal {...defaultProps} subtitle={subtitle} />
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
          <CuiMessageModal {...defaultProps} buttonText="" />
        </div>
      )

      expect(renderResult.queryByTestId('cu-button')).not.toBeInTheDocument()
    })
  })
})
