import Numeral from 'numeral'

export const formatFee = (premium_fee, fixed_price) =>
  `${!fixed_price ? '+' : ''} ${Numeral(premium_fee).format('$0,0.00')}`

export const formatChefName = (firstName, lastName) =>
  `${firstName} ${lastName}`

export const formatMealRating = stars => stars && Numeral(stars).format('0.0')

export const formatMealReviews = reviews =>
  reviews && (reviews > 999 ? '999+' : `${reviews}`)

export const formatFeature = feature => {
  if (feature && feature.description)
    feature.description = feature.description.toUpperCase()
  return feature || {}
}

export const findSpecificationDetail = (details, tag) =>
  details.find(
    d =>
      d &&
      typeof d.label === 'string' &&
      d.label.toLowerCase() === tag.toLowerCase()
  )

export const getProteinTag = protein_type => {
  const proteinsMap = {
    glutenfree: {icon: '', label: 'Gluten Free'},
    keto: {icon: '', label: 'Keto Diet'},
    meat: {icon: '', label: 'Meat'},
    paleo: {icon: '', label: 'Paleo'},
    poultry: {icon: '', label: 'Poultry'},
    seafood: {icon: '', label: 'Seafood'},
    vegan: {icon: '', label: 'Vegan'},
    vegetarian: {icon: '', label: 'Vegetarian'},
    whole30: {icon: '', label: 'Whole 30'}
  }
  return proteinsMap[protein_type.toLowerCase()]
}
