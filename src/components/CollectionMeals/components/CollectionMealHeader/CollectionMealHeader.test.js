import {render, screen} from '@testing-library/react'
import React from 'react'

import CollectionMealIcon from './index'
import {IMAGE_COLLECTION} from '../../constants'

describe('CollectionMealIcon', () => {
  it('Required props', () => {
    render(<CollectionMealIcon title="From the Sea" image={IMAGE_COLLECTION} />)
    expect(screen.getByText('From')).toBeVisible()
    expect(screen.getByText('the Sea')).toBeVisible()
  })

  it('Updated Weekly', () => {
    render(
      <CollectionMealIcon
        title="From the Sea"
        image={IMAGE_COLLECTION}
        backgroundColor="#F6E1D6"
        updatedWeekly
      />
    )
    expect(screen.getByText('UPDATED WEEKLY')).toBeVisible()
  })
})
