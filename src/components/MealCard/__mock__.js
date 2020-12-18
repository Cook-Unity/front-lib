export const meal_basic = {
  name: 'Spicy Roasted Eggplant',
  short_description: 'with yellow rice and tomatoes',
  chef_firstname: 'Jean-Georges',
  chef_lastname: 'Vongerichten',
  full_path_meal_image:
    'https://d1ureao5dcqpo4.cloudfront.net/media/catalog/product/cache/x600/w/a/wayan-eggplant.jpeg',
  full_path_chef_image:
    'https://d1ureao5dcqpo4.cloudfront.net/media/avatar/chef-1x169283.jpg'
}

export const meal_extras = {
  ...meal_basic,
  calories: 430,
  reviews: 1250,
  stars: 4.3715,
  is_celebrity_chef: true,
  premium_fee: 3,
  fixed_price: false,
  feature: {
    name: 'NEW',
    description: 'NEW',
    background: '#4D4D4F',
    color: '#FFFFFF'
  },
  stock: 3,
  protein_type: 'seafood'
}

export const meal_full = {
  ...meal_extras,
  specifications_detail: [
    {
      label: 'Dairy Free',
      __typename: 'SpecificationsDetails'
    },
    {
      label: 'Gluten Free',
      __typename: 'SpecificationsDetails'
    },
    {
      label: 'High Fat',
      __typename: 'SpecificationsDetails'
    },
    {
      label: 'High Protein',
      __typename: 'SpecificationsDetails'
    },
    {
      label: 'Nuts Free',
      __typename: 'SpecificationsDetails'
    },
    {
      label: 'Spicy',
      __typename: 'SpecificationsDetails'
    },
    {
      label: 'Super Foods',
      __typename: 'SpecificationsDetails'
    }
  ]
}
