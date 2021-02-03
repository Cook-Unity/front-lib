import React, {useState} from 'react'
import PropTypes from 'prop-types'

import images from '../../assets/images'
import SocialShare from '../../components/SocialShareButton'
import ChefInfo from '../ChefInfo'
import Meals from '../Meals'
import Reviews from '../Reviews/components/ReviewsBasic'

import styles from './ChefPage.module.scss'

const ChefPage = ({chef, meals, reviews, share_url}) => {
  const [showSocialInfo, setShowSocialInfo] = useState(false)
  const mealsTitle = `${chef.firstname}’ Meals`
  const shareTitle = 'Take a look at this chef'

  return (
    <div className={styles['chef-page']}>
      {share_url && (
        <div className={styles.share_container}>
          <div
            className={styles.share_button}
            onClick={() => setShowSocialInfo(!showSocialInfo)}
          >
            <img src={images.share} alt="share" />
            <p>Share</p>
          </div>

          {showSocialInfo && (
            <SocialShare
              url={share_url}
              title={shareTitle}
              customStyles={{
                socialLinks: styles.socialLinks
              }}
            />
          )}
        </div>
      )}
      <ChefInfo chef={chef} />
      <Meals meals={meals} title={mealsTitle} subtitle="Available Now" />
      <Reviews
        reviews={reviews}
        product={{stars: chef.stars}}
        quantity={reviews && reviews.length}
        isChef
      />
    </div>
  )
}

ChefPage.propTypes = {
  chef: PropTypes.object,
  meals: PropTypes.arrayOf(PropTypes.object),
  reviews: PropTypes.arrayOf(PropTypes.object),
  share_url: PropTypes.string
}

ChefPage.defaultProps = {
  chef: {},
  meals: [],
  reviews: [],
  share_url: null
}

export default ChefPage
