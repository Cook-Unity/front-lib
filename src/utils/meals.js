import images from '../assets/images'

export const getProteinTag = protein_type => {
  if (!protein_type) return
  const proteinsMap = {
    glutenfree: {icon: '', label: 'Gluten Free'},
    keto: {icon: '', label: 'Keto Diet'},
    meat: {icon: '', label: 'Meat'},
    paleo: {icon: '', label: 'Paleo'},
    poultry: {icon: '', label: 'Poultry'},
    seafood: {icon: '', label: 'Seafood'},
    vegan: {icon: images.veganIcon, label: 'Vegan'},
    vegetarian: {icon: images.vegetarianIcon, label: 'Vegetarian'},
    whole30: {icon: '', label: 'Whole 30'}
  }
  return proteinsMap[protein_type.toLowerCase()]
}
