import React, {useState} from 'react'
import PropTypes from 'prop-types'
import images from '../../assets/images'
import SocialShare from '../SocialShareButton'

import styles from './Share.module.scss'

const Share = ({url, title, customStyles}) => {
  const [showSocialInfo, setShowSocialInfo] = useState(false)
  customStyles.socialLinks = customStyles.socialLinks || styles.socialLinks

  return (
    <div className={styles.share}>
      <div
        className={styles.share_button}
        onClick={() => setShowSocialInfo(!showSocialInfo)}
      >
        <img src={images.share} alt="share" />
        <p>Share</p>
      </div>
      {showSocialInfo && (
        <SocialShare url={url} title={title} customStyles={customStyles} />
      )}
    </div>
  )
}

Share.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  customStyles: PropTypes.object
}

Share.defaultProps = {
  title: null,
  customStyles: {}
}

export default Share
