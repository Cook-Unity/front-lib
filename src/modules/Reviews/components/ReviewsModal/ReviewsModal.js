import React, {useState} from 'react';
import Modal from '../../../../common/Modal'
import ReviewsList from '../ReviewsList'
import ReviewsSummary from '../ReviewsSummary'
import './ReviewsModal.css';

const ReviewsModal = ({ isOpen, product, reviews, quantity, onRequestClose }) => {

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Content
        product={product}
        quantity={quantity}
        reviews={reviews}
        onRequestClose={onRequestClose}
      />
    </Modal>
  )
}

export default ReviewsModal

const Content = ({ onRequestClose, quantity, product, reviews, handleClick }) => {

  const [page, setPage] = useState(1)
  const [isOnScreen, setIsOnScreen] = useState(false)

  const ref = React.createRef()
  const observer = new IntersectionObserver(
    ([entry]) => {
      this.setIntersecing(entry.isIntersecting)
    },
    {
      rootMargin: '-25px'
    }
  )

  const setIntersecing = isIntersecting => {
    isOnScreen = isIntersecting
  }

  const componentDidMount = () => {
    this.observer.observe(ref.current)
  }

  const componentWillUnmount = () =>  {
    this.observer.unobserve(ref.current)
  }

  const loadMore = () => {
    setPage = page + 1
  }

  let reviewsToShow = page * 10

  reviewsToShow =
    reviewsToShow >= reviews.length ? reviews.length : reviewsToShow

  return (
    <div className="content" onClick={handleClick}>
      <div className="header">
        <h2 ref={ref}>Customer Reviews</h2>
      </div>

      <div className="reviews">
        <ReviewsSummary quantity={quantity} product={product} />

        <ReviewsList
          reviews={reviews}
          max={reviewsToShow}
          onLoadMore={loadMore}
          loadMoreLabel="Load more"
        />
      </div>
    </div>
  )
}


