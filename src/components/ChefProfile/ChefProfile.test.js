import * as React from 'react'
import {render} from '@testing-library/react'

import defaultPropsMock from './__mock__.json'
import ChefProfile from './ChefProfile'

const chefFirstname = defaultPropsMock.mealDetail.chefFirstname
const chefLastname = defaultPropsMock.mealDetail.chefLastname

const defaultProps = {
  firstname: chefFirstname,
  lastname: chefLastname,
  img: defaultPropsMock.mealDetail.chefImageUrl
}

describe('ChefProfile component', () => {
  describe('Checking chef name', () => {
    it(`Check than ${defaultProps.chefFirstname} and  ${defaultProps.chefLastname} is contain in the component`, () => {
      const renderResult = render(<ChefProfile {...defaultProps} />)

      expect(renderResult.getByTestId('chef-name')).toHaveTextContent(
        `${defaultProps.firstname} ${defaultProps.lastname}`
      )
    })
  })
})
