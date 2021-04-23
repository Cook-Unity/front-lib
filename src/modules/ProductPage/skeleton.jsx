import React, {Fragment} from 'react'
import ProductBasicInformation from '../ProductBasicInformation'

const MealDetailSkeleton = () => {
  return (
    <Fragment>
      <ProductBasicInformation hideStars isLoading productData={{}} />
    </Fragment>
  )
}

export default MealDetailSkeleton
