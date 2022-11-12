import React from 'react'
import CategoryCover from '.'
import {
  category_basic,
  category_no_image,
  category_error_image,
  category_overlapped
} from './__mock__'

export default {
  title: 'CategoryCover',
  component: CategoryCover
}

const Template = args => {
  return <CategoryCover {...args} />
}

export const Default = Template.bind({})
Default.args = {
  ...category_basic
}

export const NoCategoryImage = Template.bind({})
NoCategoryImage.args = {
  ...category_no_image
}

export const ErrorMealImage = Template.bind({})
ErrorMealImage.args = {
  ...category_error_image
}

export const NoTitle = Template.bind({})
NoTitle.args = {
  ...category_basic,
  title: ''
}

export const NoSubtitle = Template.bind({})
NoSubtitle.args = {
  ...category_basic,
  subtitle: ''
}

export const Overlapped = Template.bind({})
Overlapped.args = {
  ...category_overlapped
}
