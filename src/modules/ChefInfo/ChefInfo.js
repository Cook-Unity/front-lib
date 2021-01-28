import React, {useState} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './ChefInfo.module.scss'

import RatingMeal from '../../components/RatingMeal'

const ChefInfo = ({chef, review}) => {
  const [showMoreDescription, setShowMoreDescription] = useState(false)

  return (
    <div className={classnames(styles['chef-info'], 'row-chef row-space')}>
      <div className="row-chef">
        <div className="col-50 is-desktop">
          <div
            className="chef-img "
            style={{
              backgroundImage: `url(${chef.image_url})`
            }}
          />
          <div className="autograph-container">
            <h4>{chef.firstname && chef.firstname.replace('-', ' ')}</h4>
          </div>
        </div>
        <div className="chef-banner col-50">
          <div className="chef-banner-item">
            <h2>{chef.firstname + ' ' + chef.lastname}</h2>
          </div>
          {chef.is_celebrity_chef && chef.logopic_url && (
            <div className="logopic-container">
              of{' '}
              <img
                className="logopic-img"
                src={chef.logopic_url}
                alt="logopic"
              />
            </div>
          )}
          <div>
            <RatingMeal stars={review.stars} reviewsCount={review.count} />
            <div className="col-50 is-mobile">
              <div
                className="chef-img is-mobile"
                style={{
                  backgroundImage: `url(${chef.image_url})`
                }}
              />
              <div className="autograph-container is-mobile">
                <h4>{chef.firstname}</h4>
              </div>
            </div>
          </div>
          <div className="chef-description">
            <span
              dangerouslySetInnerHTML={{__html: chef.compdesi}}
              className={showMoreDescription ? '' : 'compact'}
            />
            {!showMoreDescription && (
              <button
                className="read-more"
                onClick={() => setShowMoreDescription(!showMoreDescription)}
              >
                Read more
              </button>
            )}
          </div>
          {chef.countries && chef.countries.length ? (
            <div className="main_cuisines">
              <p>Main Cuisines</p>
              {chef.countries.map(country => (
                <div key={country.key} className="div_countrie">
                  {country.label}
                </div>
              ))}
            </div>
          ) : null}
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
    compdesi: PropTypes.string,
    is_celebrity_chef: PropTypes.string,
    logopic_url: PropTypes.string,
    countries: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        label: PropTypes.string
      })
    )
  }),
  review: {
    starts: PropTypes.string,
    count: PropTypes.string
  }
}

ChefInfo.defaultProps = {
  chef: {},
  review: {}
}

export default ChefInfo
