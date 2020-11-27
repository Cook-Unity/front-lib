import React, {Fragment} from 'react'
import MealCard from '../MealCard'

import {mealSkeleton} from '../MealCard/skeleton'

const MealDetailSkeleton = ({preloadedMealDetail}) => {
  return (
    <Fragment>
      <MealCard
        isLoading
        order={[]}
        mealDetail={mealSkeleton}
        preloadedMealDetail={preloadedMealDetail}
      />
    </Fragment>
  )
}

export default MealDetailSkeleton
