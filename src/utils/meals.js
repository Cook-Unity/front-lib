import images from '../assets/images'

export const getProteinTag = proteinType => {
  if (!proteinType) return

  const proteinsMap = {
    glutenfree: {icon: '', label: 'Gluten Free'},
    keto: {icon: '', label: 'Keto Diet'},
    meat: {icon: '', label: 'Meat'},
    paleo: {icon: '', label: 'Paleo'},
    poultry: {icon: '', label: 'Poultry'},
    seafood: {icon: '', label: 'Seafood'},
    vegan: {icon: images.veganIcon, label: 'Vegan'},
    vegetarian: {icon: images.vegetarianIcon, label: 'Vegetarian'}
  }
  return proteinsMap[proteinType.toLowerCase()]
}
