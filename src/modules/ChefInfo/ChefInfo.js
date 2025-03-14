import React, {useState} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './ChefInfo.module.scss'

import RatingMeal from '../../components/RatingMeal'

import {stripHtml} from '../../utils/string'

const isCelebrity = chef =>
  !(!chef.is_celebrity_chef || chef.is_celebrity_chef === '0')

const ChefInfo = ({chef}) => {
  const [showMoreDescription, setShowMoreDescription] = useState(false)

  return (
    <div className={styles['chef-info']}>
      <div className={styles['row-chef']}>
        <div className={classnames(styles['col-50'], styles['is-desktop'])}>
          <div
            className={styles['chef-img']}
            style={{
              backgroundImage: `url(${chef.image_url})`
            }}
          />
          <div className={styles['autograph-container']}>
            <h4>{chef.firstname && chef.firstname.replace('-', ' ')}</h4>
          </div>
        </div>
        <div className={classnames(styles['chef-banner'], styles['col-50'])}>
          <div className={styles['chef-banner-item']}>
            <h2>{chef.firstname + ' ' + chef.lastname}</h2>
          </div>
          {isCelebrity(chef) && chef.logopic_url && (
            <div className={styles['logopic-container']}>
              of{' '}
              <img
                className={styles['logopic-img']}
                src={chef.logopic_url}
                alt="logopic"
              />
            </div>
          )}
          <div>
            <div className={styles['rating-meal']}>
              <RatingMeal stars={chef.stars} reviewsCount={chef.reviews} />
            </div>
            <div className={classnames(styles['is-mobile'], styles['col-50'])}>
              <div
                className={classnames(styles['chef-img'], styles['is-mobile'])}
                style={{
                  backgroundImage: `url(${chef.image_url})`
                }}
              />
              <div
                className={classnames(
                  styles['autograph-container'],
                  styles['is-mobile']
                )}
              >
                <h4>{chef.firstname}</h4>
              </div>
            </div>
          </div>
          <div className={styles['chef-description']}>
            <span
              dangerouslySetInnerHTML={{
                __html: stripHtml(chef.compdesi).replace(/\n(\s?)/g, '<br/>')
              }}
              className={classnames({
                [styles.compact]: !showMoreDescription
              })}
            />
            {!showMoreDescription && (
              <button
                className={styles['read-more']}
                onClick={() => setShowMoreDescription(!showMoreDescription)}
              >
                Read more
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

ChefInfo.propTypes = {
  chef: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    starts: PropTypes.string,
    total_reviews: PropTypes.string,
    compdesi: PropTypes.string,
    is_celebrity_chef: PropTypes.string,
    logopic_url: PropTypes.string
  })
}

ChefInfo.defaultProps = {
  chef: {}
}

export default ChefInfo
