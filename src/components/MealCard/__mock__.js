export const meal_basic = {
  name: 'Spicy Roasted Eggplant',
  chef_firstname: 'Jean-Georges',
  chef_lastname: 'Vongerichten',
  magentoId: 1212,
  full_path_meal_image:
    'https://d1ureao5dcqpo4.cloudfront.net/media/catalog/product/cache/x600/s/h/shrimp-fra-diavolo-johndl.jpeg',
  full_path_chef_image:
    'https://d1ureao5dcqpo4.cloudfront.net/media/avatar/esther-choi-bw24437.jpg',
  specifications_detail: null
}

export const meal_extras = {
  ...meal_basic,
  short_description: 'with yellow rice and tomatoes',
  calories: 430,
  reviews: 1250,
  stars: 4.3715,
  is_celebrity_chef: true,
  is_premium: true,
  premium_special: null,
  premium_fee: 3,
  fixed_price: false,
  stock: 3,
  protein_type: 'seafood',
  feature: null
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

export const meal_new = {
  ...meal_full,
  feature: {
    name: 'NEW_RECIPE',
    description: 'NEW',
    background: '#4D4D4F',
    color: '#FFFFFF'
  }
}

export const meal_featured = {
  ...meal_full,
  feature: {
    name: 'THANKSGIVING',
    description: 'THANKSGIVING',
    background: '#CC231E',
    color: '#FFFFFF'
  }
}

export const new_chef = {
  ...meal_full,
  feature: {
    name: 'NEW_AUTHOR',
    description: 'NEW',
    background: '#4D4D4F',
    color: '#FFFFFF'
  }
}

export const meal_no_image = {
  ...meal_full,
  full_path_meal_image: '/no_selection'
}

export const meal_long_name = {
  ...meal_full,
  name: 'Fettuccine Alfredo with Blackened Salmon'
}

export const with_warnings = {
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

export const with_user_rating = {
  ...meal_full,
  user_rating: 5
}

export const out_of_stock = {
  ...meal_full,
  stock: 0
}
export const meal_error_image = {
  ...meal_basic,
  full_path_meal_image:
    'https://d1ureao5dcqpo4.cloudfront.net/media/catalog/product/cache/x600/c/h/chef_nico_cook_1.jpg'
}
