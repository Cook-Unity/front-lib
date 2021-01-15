import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import images from '../../assets/images'
import styles from './FinalSteps.module.scss'

const formatSteps = steps => {
  steps = typeof steps === 'string' ? steps.split(/\d+\.\s/) : steps

  return steps.filter(s => !!s).map(s => s.replace('\n', ''))
}

const FinalSteps = ({chefInstructions, fastInstructions, isLoading}) => {
  if (!chefInstructions && !fastInstructions) {
    return null
  }

  return (
    <div className={styles.finalSteps}>
      <div className={styles.cooking}>
        <h2 className={classnames({[styles.loading]: isLoading})}>
          Heating Instructions
        </h2>
        {chefInstructions && (
          <div
            className={classnames(styles.oven, {
              [styles.loading]: isLoading
            })}
          >
            <h4>Chef Instructions:</h4>
            <div
              className={classnames(styles.steps, {
                [styles.loading]: isLoading
              })}
            >
              {formatSteps(chefInstructions).map((step, i) => (
                <p key={`ovenStepsP-${i}`}>{`${i + 1}. ${step}`}</p>
              ))}
            </div>
          </div>
        )}

        {fastInstructions && (
          <div
            className={classnames(styles.microwave, {
              [styles.loading]: isLoading
            })}
          >
            <h4>Fast Instructions:</h4>
            <div
              className={classnames(styles.steps, {
                [styles.loading]: isLoading
              })}
            >
              {formatSteps(fastInstructions).map((step, i) => (
                <p key={i}>{`${i + 1}. ${step}`}</p>
              ))}
            </div>
          </div>
        )}

        {!isLoading && (
          <h3>
            <img src={images.enjoyImage} alt="enjoy" />
            <b>Enjoy it Warm!</b>
          </h3>
        )}
      </div>

      {!isLoading && (
        <Fragment>
          <div className={styles.cookingRow}>
            <div className={styles.col50}>
              <div className={styles.iceImg}>
                <img src={images.iceImage} alt="Chilled meals" />
              </div>
              <p>
                <span>Meals are delivered chilled</span> <br />
                Containers are oven & microwave safe, lid is not safe.
              </p>
            </div>
            <div className={styles.col50}>
              <div className={styles.iceImg}>
                <img src={images.codeQRImage} alt="QR code" />
              </div>
              <p>
                <span>Scan the QR Code on your meal</span>
                <br />
                Find Heating instructions, Nutritional info, Expiration date
              </p>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  )
}

FinalSteps.propTypes = {
  fastInstructions: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
  chefInstructions: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
  isLoading: PropTypes.bool
}

FinalSteps.defaultProps = {
  fastInstructions: null,
  chefInstructions: null,
  isLoading: false
}

export default FinalSteps
