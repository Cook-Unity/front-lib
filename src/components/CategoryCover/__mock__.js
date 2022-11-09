export const category_basic = {
  title: 'Sides & Complements',
  subtitle:
    'Whether building your own meal, adding on as a dish compliment, or snacking, our chefs have you covered with their signature sides you’ll want any time of day.',
  coverImagePath:
    'https://d1ureao5dcqpo4.cloudfront.net/media/cover/sides-cover.jpg'
}

export const category_no_image = {
  ...category_basic,
  coverImagePath: '/no_selection'
}

export const category_error_image = {
  ...category_basic,
  coverImagePath:
    'https://d1ureao5dcqpo4.cloudfront.net/media/catalog/product/cache/x600/c/h/chef_nico_cook_1.jpg'
}

export const category_overlapped = {
  title: 'Sauces & condiments for your pantry',
  subtitle:
    "The best condiments and most popular sauces tie a dish together. They fill flavor gaps and add to the dish's presentation. If you're missing a sweet or a sour, the right sauce can quickly and easily fill that void.",
  coverImagePath:
    'https://d1ureao5dcqpo4.cloudfront.net/media/cover/sides-cover.jpg',
  textOverlapped: true
}
