import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {toast} from 'react-toastify'

import images from '../../assets/images'

import styles from './SocialShareButton.module.scss'

const Social = props => {
  const {url, title, onClickButton, customStyles} = props
  const socialLinks = customStyles.socialLinks
  const socialLink = customStyles.socialLink
  const facebook = customStyles.facebook
  const copyLink = customStyles.copyLink

  return (
    <div className={classnames([styles.socialLinks, socialLinks], {})}>
      <div
        className={classnames(styles.socialLink, {
          socialLink,
          facebook
        })}
      >
        <a
          className={classnames([styles.facebook, facebook], {})}
          target="_blank"
          rel="noreferrer noopener"
          onClick={() => onClickButton('facebook')}
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`}
        >
          <img
            src={images.facebook}
            alt="Facebook"
            className={styles.facebook}
          />
        </a>
      </div>

      <div className={classnames([styles.socialLink, socialLink], {})}>
        <a
          className={styles.twitter}
          target="_blank"
          rel="noreferrer noopener"
          onClick={() => onClickButton('twitter')}
          href={`https://twitter.com/share?url=${encodeURIComponent(url)}`}
        >
          <img src={images.twitter} alt="Twitter" className={styles.twitter} />
        </a>
      </div>

      <div className={classnames([styles.socialLink, socialLink], {})}>
        <a
          className={classnames([styles.copyLink, copyLink], {})}
          target="_blank"
          rel="noreferrer noopener"
          onClick={() => onClickButton('email')}
          href={`mailto:?subject=Enjoy ${title}&body=${encodeURIComponent(
            url
          )}`}
        >
          <img src={images.email} alt="Email" className={styles.email} />
        </a>
      </div>

      <div className={classnames([styles.socialLink, socialLink], {})}>
        <CopyToClipboard
          text={url}
          onCopy={() => {
            onClickButton('copy link')
            toast('Copied on clipboard!')
          }}
        >
          <img src={images.copyLink} alt="Copy link" />
        </CopyToClipboard>
      </div>
    </div>
  )
}

Social.propTypes = {
  onClickButton: PropTypes.func,
  customStyles: PropTypes.object
}

Social.defaultProps = {
  onClickButton: () => {},
  customStyles: {
    socialLinks: '',
    socialLink: '',
    facebook: '',
    copyLink: ''
  }
}

export default Social
