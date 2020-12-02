import * as React from 'react'
import {render} from '@testing-library/react'

import defaultPropsMock from './__mock__.json'
import ChefProfile from './ChefProfile'

const chef_firstname = defaultPropsMock.mealDetail.chef_firstname
const chef_lastname = defaultPropsMock.mealDetail.chef_lastname

const defaultProps = {
  firstname: chef_firstname,
  lastname: chef_lastname,
  img: defaultPropsMock.mealDetail.chef_img
}

describe('ChefProfile component', () => {
  describe('Checking chef name', () => {
    it(`Check than ${defaultProps.chef_firstname} and  ${defaultProps.chef_lastname} is contain in the component`, () => {
      const renderResult = render(<ChefProfile {...defaultProps} />)

      expect(renderResult.getByTestId('chef-name').textContent).toBe(
        `${defaultProps.firstname} ${defaultProps.lastname}`
      )
    })
  })
})
