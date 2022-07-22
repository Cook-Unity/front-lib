import images from '../../assets/images'

// mealName, mealName, weeks

export const add_meals_basic = {
  mealPhoto: images.noMealImg,
  mealName: 'Wagon weel pomodoro',
  weeks: [
    {
      date: 'Wednesday, 19 Aug.',
      orderStatus: 'scheduled',
      mealStatus: 'available'
    },
    {
      date: 'Wednesday, 20 Aug.',
      orderStatus: 'scheduled',
      mealStatus: 'notAvailable'
    },
    {
      date: 'Wednesday, 21 Aug.',
      orderStatus: 'scheduled',
      mealStatus: 'added'
    }
  ]
}

export const add_meals_available = {
  mealPhoto: images.noMealImg,
  mealName: 'Wagon weel pomodoro',
  weeks: [
    {
      date: 'Wednesday, 19 Aug.',
      orderStatus: 'scheduled',
      mealStatus: 'available'
    },
    {
      date: 'Wednesday, 20 Aug.',
      orderStatus: 'confirmed',
      mealStatus: 'available'
    },
    {
      date: 'Wednesday, 21 Aug.',
      orderStatus: 'skip',
      mealStatus: 'available'
    }
  ]
}

export const add_meals_not_available = {
  mealPhoto: images.noMealImg,
  mealName: 'Wagon weel pomodoro',
  weeks: [
    {
      date: 'Wednesday, 19 Aug.',
      orderStatus: 'scheduled',
      mealStatus: 'notAvailable'
    },
    {
      date: 'Wednesday, 20 Aug.',
      orderStatus: 'confirmed',
      mealStatus: 'notAvailable'
    },
    {
      date: 'Wednesday, 21 Aug.',
      orderStatus: 'skip',
      mealStatus: 'notAvailable'
    }
  ]
}

export const add_meals_added = {
  mealPhoto: images.noMealImg,
  mealName: 'Wagon weel pomodoro',
  weeks: [
    {
      date: 'Wednesday, 19 Aug.',
      orderStatus: 'scheduled',
      mealStatus: 'added'
    },
    {
      date: 'Wednesday, 20 Aug.',
      orderStatus: 'scheduled',
      mealStatus: 'notAvailable'
    },
    {
      date: 'Wednesday, 21 Aug.',
      orderStatus: 'scheduled',
      mealStatus: 'notAvailable'
    }
  ]
}
