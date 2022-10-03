import * as React from 'react'
import {render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import dataMock from './__mock__.json'
import TabsMenu from './TabsMenu'

const defaultProps = {
  tabsItems: dataMock.all,
  selectedTab: dataMock.all[0]
}

describe('TabsMenu component', () => {
  describe('When sending a tabItems prop', () => {
    it('should render all the elements in the props', () => {
      const renderResult = render(<TabsMenu {...defaultProps} />)

      const itemsToTest = renderResult.getAllByTestId('tab-item')
      expect(itemsToTest).toHaveLength(dataMock.all.length)

      itemsToTest.forEach((item, index) => {
        const images = item.getElementsByTagName('img')
        expect(item).toHaveTextContent(dataMock.all[index].name)
        expect(images[0]).toHaveAttribute('src', dataMock.all[index].image)
      })
    })
  })

  describe('When clicking on a tab item', () => {
    it('should call the OnClick callback', () => {
      const clickMock = jest.fn()
      const renderResult = render(
        <TabsMenu {...defaultProps} handleOnClick={clickMock} />
      )

      const items = renderResult.getAllByTestId('tab-item')

      userEvent.click(items[0])
      expect(clickMock).toHaveBeenCalled()
    })
  })

  describe('When including the selectedTab prop', () => {
    it('should set the item to selected', () => {
      const index = 2
      const renderResult = render(
        <TabsMenu {...defaultProps} selectedTab={dataMock.all[index]} />
      )

      const items = renderResult.getAllByTestId('span-item')
      expect(items[index]).toHaveClass('selected')
    })
  })
})
