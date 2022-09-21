import * as React from 'react'
import {render} from '@testing-library/react'

import defaultPropsMock from './__mock__.json'
import TabsMenu from './TabsMenu'

const chefFirstname = defaultPropsMock.mealDetail.chefFirstname
const chefLastname = defaultPropsMock.mealDetail.chefLastname

const defaultProps = {
  firstname: chefFirstname,
  lastname: chefLastname,
  img: defaultPropsMock.mealDetail.chefImageUrl
}

describe('TabsMenu component', () => {
  describe('Checking chef name', () => {
    it(`Check than ${defaultProps.chefFirstname} and  ${defaultProps.chefLastname} is contain in the component`, () => {
      const renderResult = render(<TabsMenu {...defaultProps} />)

      expect(renderResult.getByTestId('chef-name')).toHaveTextContent(
        `${defaultProps.firstname} ${defaultProps.lastname}`
      )
    })
  })
})
