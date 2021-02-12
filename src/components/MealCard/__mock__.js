export const meal_basic = {
  name: 'Spicy Roasted Eggplant',
  chef_firstname: 'Jean-Georges',
  chef_lastname: 'Vongerichten',
  short_description: 'with yellow rice and tomatoes',
  magentoId: 1212,
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

export const meal_no_image = {
  name: 'Spicy Roasted Eggplant',
  chef_firstname: 'Jean-Georges',
  chef_lastname: 'Vongerichten',
  magentoId: 1212,
  full_path_meal_image: null
}

export const meal_full = {
  ...meal_extras,
  full_path_meal_image:
    'https://d1ureao5dcqpo4.cloudfront.net/media/catalog/product/cache/x600/w/a/wayan-eggplant.jpeg',
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

export const meal_long_name = {
  ...meal_full,
  name: 'Fettuccine Alfredo with Blackened Salmon'
}

export const withWarnings = {
  ...meal_full,
  warning: 'Contains: Gluten, Nuts, Shellfish',
  warnings: {
    restrictions_applied: [
      {
        name: 'Gluten'
      },
      {
        name: 'Nuts'
      },
      {
        name: 'Shellfish'
      }
    ]
  }
}

export const withUserRating = {
  ...meal_full,
  user_rating: 5
}
