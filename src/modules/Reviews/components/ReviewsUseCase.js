import React, {useState} from 'react'
import Reviews from '..'

const ReviewsUseCase = props => {
  const [showReviewsModal, setShowReviewsModal] = useState(false)
  const toggleReviewsModal = () => setShowReviewsModal(!showReviewsModal)

  props = {
    ...props,
    toggleReviewsModal,
    showReviewsModal
  }

  return <Reviews {...props} />
}

export default ReviewsUseCase
