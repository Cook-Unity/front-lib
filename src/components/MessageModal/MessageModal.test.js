import * as React from 'react'
import {render} from '@testing-library/react'

import props from './data.mock'
import MessageModal from './MessageModal'

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
          <MessageModal {...defaultProps} />
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
})
