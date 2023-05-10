import {fullIconPath} from '../../../utils/images'

export const CuiIconNames = {
  control: {
    type: 'select',
    options: [
      'alert',
      'allDone',
      'archive',
      'arrowLeft',
      'arrowDown',
      'arrowForward',
      'checkmark',
      'checkmarkCircle',
      'checkmarkCircle2',
      'chevronRight',
      'clock',
      'close',
      'easyAndConvenient',
      'edit',
      'eggsAndDairy',
      'everChangingMenu',
      'favorite',
      'favorites',
      'featured',
      'filter',
      'fire',
      'flashIcon',
      'flexiblePlans',
      'forbidden',
      'friend',
      'glutenFree',
      'handCrafted',
      'heart',
      'heartFilled',
      'highCalories',
      'highFat',
      'highProtein',
      'history',
      'hundreds',
      'infoIcon',
      'infoEmptyCircled',
      'keto',
      'layers',
      'lowCalories',
      'lowCarbs',
      'lowFat',
      'lowSodium',
      'lowSugar',
      'meals',
      'meat',
      'menu',
      'messageCircle',
      'messageSquare',
      'minus',
      'mixMatch',
      'nutFree',
      'nutrition',
      'options',
      'orders1',
      'orders2',
      'orders3',
      'orders4',
      'paleo',
      'percent',
      'plantBased',
      'plus',
      'pork',
      'poultry',
      'poultry2',
      'questionMarkCircle',
      'questionMarkSquare',
      'retweet',
      'reviewStars1',
      'reviewStars2',
      'reviewStars3',
      'seafood',
      'slickNext',
      'slickPrev',
      'small',
      'sorting',
      'soyFree',
      'spicyIcon',
      'spicy',
      'star',
      'superFood1',
      'superFood2',
      'timer',
      'toggleRight',
      'vegan',
      'vegetarian2',
      'vegetarian',
      'verySpicy',
      'warning',
      'youVeTried',
      'yourTopRated',
      'moreCircle'
    ]
  },
  defaultValue: 'heart'
}

// Deprecated please use utils/images/fullIconPath
const imageUrl = filename =>
  `https://static.cookunity.com/cross/front-lib/icons/${filename}`

const baseIcons = (v2 = false) => ({
  alert: (v2 ? fullIconPath : imageUrl)('alert-circle.svg'),
  alertTriangle: (v2 ? fullIconPath : imageUrl)('alert-triangle.svg'),
  allDone: (v2 ? fullIconPath : imageUrl)('all-done.svg'),
  archive: (v2 ? fullIconPath : imageUrl)('archive.svg'),
  arrowDown: (v2 ? fullIconPath : imageUrl)('arrow-down.svg'),
  arrowForward: (v2 ? fullIconPath : imageUrl)('arrow-forward.svg'),
  arrowLeft: (v2 ? fullIconPath : imageUrl)('arrow-left.svg'),
  billing: (v2 ? fullIconPath : imageUrl)('billing.svg'),
  cart: (v2 ? fullIconPath : imageUrl)('shopping-cart.svg'),
  checkmark: (v2 ? fullIconPath : imageUrl)('checkmark.svg'),
  checkmarkCircle: (v2 ? fullIconPath : imageUrl)('checkmark-circle.svg'),
  checkmarkCircle2: (v2 ? fullIconPath : imageUrl)('checkmark-circle-2.svg'),
  chevronDown: (v2 ? fullIconPath : imageUrl)('chevron-down.svg'),
  chevronRight: (v2 ? fullIconPath : imageUrl)('chevron-right.svg'),
  chevronUp: (v2 ? fullIconPath : imageUrl)('chevron-up.svg'),
  clock: (v2 ? fullIconPath : imageUrl)('clock.svg'),
  close: (v2 ? fullIconPath : imageUrl)('close.svg'),
  edit: (v2 ? fullIconPath : imageUrl)('edit.svg'),
  easyAndConvenient: (v2 ? fullIconPath : imageUrl)('easy-and-convenient.svg'),
  eggsAndDairy: (v2 ? fullIconPath : imageUrl)('eggs-and-dairy.svg'),
  everChangingMenu: (v2 ? fullIconPath : imageUrl)('ever-changing-menu.svg'),
  favorite: (v2 ? fullIconPath : imageUrl)('favorite-icon.svg'),
  favorites: (v2 ? fullIconPath : imageUrl)('favorites.svg'),
  featured: (v2 ? fullIconPath : imageUrl)('featured.svg'),
  filter: (v2 ? fullIconPath : imageUrl)('filter.svg'),
  fire: (v2 ? fullIconPath : imageUrl)('fire.svg'),
  flashIcon: (v2 ? fullIconPath : imageUrl)('flash.svg'),
  flexiblePlans: (v2 ? fullIconPath : imageUrl)('flexible-plans.svg'),
  forbidden: (v2 ? fullIconPath : imageUrl)('forbidden.svg'),
  friend: (v2 ? fullIconPath : imageUrl)('friend.svg'),
  glutenFree: (v2 ? fullIconPath : imageUrl)('gluten-free.svg'),
  handCrafted: (v2 ? fullIconPath : imageUrl)('hand-crafted.svg'),
  heart: (v2 ? fullIconPath : imageUrl)('heart.svg'),
  heartFilled: (v2 ? fullIconPath : imageUrl)('heart-filled.svg'),
  highCalories: (v2 ? fullIconPath : imageUrl)('high-calories.svg'),
  highFat: (v2 ? fullIconPath : imageUrl)('high-fat.svg'),
  highProtein: (v2 ? fullIconPath : imageUrl)('high-protein.svg'),
  history: (v2 ? fullIconPath : imageUrl)('history.svg'),
  hundreds: (v2 ? fullIconPath : imageUrl)('hundreds.svg'),
  info: (v2 ? fullIconPath : imageUrl)('info.svg'),
  infoIcon: (v2 ? fullIconPath : imageUrl)('info-icon.svg'),
  infoEmptyCircled: (v2 ? fullIconPath : imageUrl)('info-empty-circled.svg'),
  keto: (v2 ? fullIconPath : imageUrl)('keto.svg'),
  ketogenic: (v2 ? fullIconPath : imageUrl)('keto.svg'),
  layers: (v2 ? fullIconPath : imageUrl)('layers.svg'),
  lowCalories: (v2 ? fullIconPath : imageUrl)('low-calories.svg'),
  lowCarbs: (v2 ? fullIconPath : imageUrl)('low-carbs.svg'),
  lowFat: (v2 ? fullIconPath : imageUrl)('low-fat.svg'),
  lowSodium: (v2 ? fullIconPath : imageUrl)('low-sodium.svg'),
  lowSugar: (v2 ? fullIconPath : imageUrl)('low-sugar.svg'),
  meals: (v2 ? fullIconPath : imageUrl)('meals.svg'),
  meat: (v2 ? fullIconPath : imageUrl)('meat.svg'),
  mediterranean: (v2 ? fullIconPath : imageUrl)('mediterraneanDiet.svg'),
  menu: (v2 ? fullIconPath : imageUrl)('menu.svg'),
  messageCircle: (v2 ? fullIconPath : imageUrl)('message-circle.svg'),
  messageSquare: (v2 ? fullIconPath : imageUrl)('message-square.svg'),
  minus: (v2 ? fullIconPath : imageUrl)('minus.svg'),
  mixMatch: (v2 ? fullIconPath : imageUrl)('mix-match.svg'),
  nutFree: (v2 ? fullIconPath : imageUrl)('nut-free.svg'),
  nutrition: (v2 ? fullIconPath : imageUrl)('nutrition.svg'),
  options: (v2 ? fullIconPath : imageUrl)('options.svg'),
  orders1: (v2 ? fullIconPath : imageUrl)('orders-1.svg'),
  orders2: (v2 ? fullIconPath : imageUrl)('orders-2.svg'),
  orders3: (v2 ? fullIconPath : imageUrl)('orders-3.svg'),
  orders4: (v2 ? fullIconPath : imageUrl)('orders-4.svg'),
  paleo: (v2 ? fullIconPath : imageUrl)('paleo.svg'),
  percent: (v2 ? fullIconPath : imageUrl)('percent.svg'),
  plantBased: (v2 ? fullIconPath : imageUrl)('plant-based.svg'),
  plus: (v2 ? fullIconPath : imageUrl)('plus.svg'),
  pork: (v2 ? fullIconPath : imageUrl)('pork.svg'),
  poultry: (v2 ? fullIconPath : imageUrl)('poultry.svg'),
  poultry2: (v2 ? fullIconPath : imageUrl)('poultry-2.svg'),
  questionMarkCircle: (v2 ? fullIconPath : imageUrl)(
    'question-mark-circle.svg'
  ),
  questionMarkSquare: (v2 ? fullIconPath : imageUrl)(
    'question-mark-square.svg'
  ),
  retweet: (v2 ? fullIconPath : imageUrl)('retweet.svg'),
  reviewStars1: (v2 ? fullIconPath : imageUrl)('review-stars-1.svg'),
  reviewStars2: (v2 ? fullIconPath : imageUrl)('review-stars-2.svg'),
  reviewStars3: (v2 ? fullIconPath : imageUrl)('review-stars-3.svg'),
  seafood: (v2 ? fullIconPath : imageUrl)('seafood.svg'),
  slickPrev: (v2 ? fullIconPath : imageUrl)('slick-prev.svg'),
  slickNext: (v2 ? fullIconPath : imageUrl)('slick-next.svg'),
  small: (v2 ? fullIconPath : imageUrl)('small.svg'),
  sorting: (v2 ? fullIconPath : imageUrl)('sorting.svg'),
  soyFree: (v2 ? fullIconPath : imageUrl)('soy-free.svg'),
  spicyIcon: (v2 ? fullIconPath : imageUrl)('spicy-icon.svg'),
  spicy: (v2 ? fullIconPath : imageUrl)('spicy.svg'),
  star: (v2 ? fullIconPath : imageUrl)('star.svg'),
  starFull: (v2 ? fullIconPath : imageUrl)('starfull.svg'),
  superFood1: (v2 ? fullIconPath : imageUrl)('super-food-1.svg'),
  superFood2: (v2 ? fullIconPath : imageUrl)('super-food-2.svg'),
  timer: (v2 ? fullIconPath : imageUrl)('timer.svg'),
  toggleRight: (v2 ? fullIconPath : imageUrl)('toggle-right.svg'),
  sync: (v2 ? fullIconPath : imageUrl)('sync.svg'),
  trash: (v2 ? fullIconPath : imageUrl)('trash.svg'),
  vegan: (v2 ? fullIconPath : imageUrl)('vegan.svg'),
  vegetarian2: (v2 ? fullIconPath : imageUrl)('vegetarian-2.svg'),
  vegetarian: (v2 ? fullIconPath : imageUrl)('vegetarian-icon.svg'),
  verySpicy: (v2 ? fullIconPath : imageUrl)('very-spicy.svg'),
  warning: (v2 ? fullIconPath : imageUrl)('warning-icon.svg'),
  youVeTried: (v2 ? fullIconPath : imageUrl)('you_ve-tried.svg'),
  yourTopRated: (v2 ? fullIconPath : imageUrl)('your-top-rated.svg'),
  moreCircle: (v2 ? fullIconPath : imageUrl)('more-circle.svg')
})

export const icons = baseIcons(false)

export const iconsV2 = baseIcons(true)
