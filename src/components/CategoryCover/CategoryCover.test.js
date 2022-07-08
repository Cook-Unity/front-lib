import React from 'react'
import {render, screen} from '@testing-library/react'
import CategoryCover from '.'

import {category_basic, category_no_image} from './__mock__'

describe('CategoryCover component', () => {
  it('Required props', () => {
    render(
      <CategoryCover
        title={category_basic.title}
        subtitle={category_basic.subtitle}
        coverImagePath={category_basic.coverImagePath}
      />
    )

    expect(screen.getByText(category_basic.title)).toBeVisible()
    expect(screen.getByText(category_basic.subtitle)).toBeVisible()

    expect(screen.getByTestId('category-image'))
      .toHaveAttribute('src', category_basic.coverImagePath)
      .toBeVisible()
  })

  it('Is loading category card', () => {
    render(
      <CategoryCover
        title={category_basic.title}
        subtitle={category_basic.subtitle}
        coverImagePath={category_basic.coverImagePath}
        isLoading
      />
    )
    expect(screen.getByTestId('loading-container')).toBeVisible()
  })

  it('Category image coming soon', () => {
    render(
      <CategoryCover
        title={category_no_image.title}
        subtitle={category_no_image.subtitle}
        coverImagePath={category_no_image.coverImagePath}
      />
    )
    expect(screen.getByTestId('category-image'))
      .toHaveAttribute('src', category_no_image.coverImagePath)
      .toBeVisible()
  })
})
