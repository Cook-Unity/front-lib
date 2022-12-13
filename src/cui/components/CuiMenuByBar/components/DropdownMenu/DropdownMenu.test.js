import * as React from 'react'
import {render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import dataMock from './__mock__.json'
import DropdownMenu from './DropdownMenu'

const defaultProps = {
  menuItems: dataMock
}

describe('DropdownMenu component', () => {
  describe('When sending a menuItems prop', () => {
    it(`should render all the elements in the menu`, () => {
      const renderResult = render(<DropdownMenu {...defaultProps} />)

      const itemsToTest = renderResult.getAllByTestId('menu-item')
      expect(itemsToTest).toHaveLength(dataMock.length)

      itemsToTest.forEach((item, index) => {
        const images = item.getElementsByTagName('img')
        expect(item).toHaveTextContent(dataMock[index].name)
        expect(images[0]).toHaveAttribute('src', dataMock[index].image)
      })
    })
  })

  describe('When clicking on a menu item', () => {
    describe('and the handleOnClick prop is sent', () => {
      it('should call the OnClick callback', () => {
        const clickMock = jest.fn()
        const renderResult = render(
          <DropdownMenu {...defaultProps} handleOnClick={clickMock} />
        )

        const items = renderResult.getAllByTestId('menu-item')
        userEvent.click(items[0])
        expect(clickMock).toHaveBeenCalled()
      })
    })

    describe('and the handleOnClick prop is not included', () => {
      it('should not call the OnClick callback', () => {
        const clickMock = jest.fn()
        const renderResult = render(<DropdownMenu {...defaultProps} />)

        const items = renderResult.getAllByTestId('menu-item')
        userEvent.click(items[0])
        expect(clickMock).not.toHaveBeenCalled()
      })
    })
  })
})
