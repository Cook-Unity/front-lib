import {render, screen} from '@testing-library/react'
import React from 'react'

import CollectionMealIcon from './index'

const IMAGE =
  'https://d1ureao5dcqpo4.cloudfront.net/media/merchandiseSets/chef-akhtar-chicken-tinga-tacos.jpg'

describe('CollectionMealIcon', () => {
  it('Required props', () => {
    render(<CollectionMealIcon title="From the Sea" image={IMAGE} />)
    expect(screen.getByText('From')).toBeVisible()
    expect(screen.getByText('the Sea')).toBeVisible()
  })

  it('Updated Weekly', () => {
    render(
      <CollectionMealIcon
        title="From the Sea"
        image={IMAGE}
        backgroundColor="#F6E1D6"
        updatedWeekly
      />
    )
    expect(screen.getByText('UPDATED WEEKLY')).toBeVisible()
  })
})
