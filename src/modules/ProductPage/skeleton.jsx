import React, {Fragment} from 'react'
import ProductBasicInformation from '../ProductBasicInformation'

import {mealSkeleton} from '../ProductBasicInformation/skeleton'

const MealDetailSkeleton = ({preloadedMealDetail}) => {
  return (
    <Fragment>
      <ProductBasicInformation
        isLoading
        order={[]}
        mealDetail={mealSkeleton}
        preloadedMealDetail={preloadedMealDetail}
      />
    </Fragment>
  )
}

export default MealDetailSkeleton
