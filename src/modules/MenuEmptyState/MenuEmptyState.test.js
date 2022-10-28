import * as React from 'react'
import {render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import props from './data.mock.json'
import MenuEmptyState from './MenuEmptyState'

const defaultProps = {
  ...props,
  title: 'Th!5 !5 4 T!Tl3',
  handleButtonClick: () => {}
}

describe('MenuEmptyState module', () => {
  describe('Check props', () => {
    it('should have the props sent', () => {
      const renderResult = render(
        <div id="root">
          <MenuEmptyState {...defaultProps} />
        </div>
      )

      expect(renderResult.getByTestId('title')).toHaveTextContent(
        defaultProps.title.toString()
      )
      expect(renderResult.getByTestId('subtitle')).toHaveTextContent(
        defaultProps.subtitle
      )
      expect(renderResult.getByTestId('cu-button')).toHaveTextContent(
        defaultProps.buttonText
      )
      expect(renderResult.queryByTestId('favorite-img')).toHaveClass('hide')
      expect(renderResult.queryByTestId('top-rated')).toHaveClass('hide')
    })
  })

  describe('Props does not include buttonText', () => {
    it('should not render button', () => {
      const renderResult = render(
        <div id="root">
          <MenuEmptyState {...defaultProps} buttonText="" />
        </div>
      )

      expect(renderResult.queryByTestId('cu-button')).not.toBeInTheDocument()
    })
  })

  describe('Props includes button and user clicks', () => {
    it('should call the OnClick callback', () => {
      const clickMock = jest.fn()
      const renderResult = render(
        <MenuEmptyState {...defaultProps} handleButtonClick={clickMock} />
      )

      const button = renderResult.queryByTestId('cu-button')

      userEvent.click(button)
      expect(clickMock).toHaveBeenCalled()
    })
  })

  describe('is Favorite', () => {
    it('should show favorite image', () => {
      const renderResult = render(
        <div id="root">
          <MenuEmptyState {...defaultProps} isFavorite />
        </div>
      )

      expect(renderResult.queryByTestId('favorite-img')).toHaveClass(
        'isFavorite'
      )
    })
  })

  describe('is Top Rated', () => {
    it('should show top rated component', () => {
      const renderResult = render(
        <div id="root">
          <MenuEmptyState {...defaultProps} isTopRated />
        </div>
      )

      expect(renderResult.queryByTestId('top-rated')).toHaveClass(
        'starsContainer'
      )
    })
  })
})
