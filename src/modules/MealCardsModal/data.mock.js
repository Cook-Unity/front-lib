import {meal_new, meal_featured} from '../../components/MealCard/__mock__'

export default {
  title: 'One more thing...',
  subtitle: 'try our new sauces to level up your home-made meals',
  primaryButtonText: 'See All Sauces & Condiments',
  secondaryButtonText: 'Continue',
  image: 'https://d1ureao5dcqpo4.cloudfront.net/media/menu/newMenu-web.png',
  meals: [
    {id: 1, ...meal_new},
    {id: 2, ...meal_featured},
    {id: 3, ...meal_new}
  ]
}
