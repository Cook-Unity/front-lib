import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {pathOr} from 'ramda'
import classnames from 'classnames'

import Ice from '../../assets/ice.png'
import CodeQR from '../../assets/code-qr.gif'
import Enjoy from '../../assets/enjoy.png'

import styles from './FinalSteps.module.scss'

const FinalSteps = ({mealDetail, isLoading}) => {
  const microwaveSteps = pathOr(
    null,
    ['cookingSteps', 'microwave_steps'],
    mealDetail
  )

  const ovenSteps = pathOr(null, ['cookingSteps', 'oven_steps'], mealDetail)

  const formatSteps = steps =>
    steps
      .split(/\d+\.\s/)
      .filter(s => !!s)
      .map(s => s.replace('\n', ''))

  if (!ovenSteps && !microwaveSteps) {
    return null
  }

  return (
    <div className={styles.finalSteps}>
      <div
        className={(styles.finalSteps, isLoading ? styles.finalSteps : null)}
      >
        <div className={styles.cooking}>
          <h2 className={classnames({loading: isLoading})}>
            Heating Instructions
          </h2>
          {ovenSteps && (
            <div
              className={(styles.oven, isLoading ? styles.finalSteps : null)}
            >
              <h4>
                In the Oven
                {!isLoading && <span> (Recommended)</span>}
              </h4>
              <div
                className={(styles.steps, isLoading ? styles.finalSteps : null)}
              >
                {formatSteps(ovenSteps).map((step, i) => (
                  <p key={i}>{`${i + 1}. ${step}`}</p>
                ))}
              </div>
            </div>
          )}

          {microwaveSteps && (
            <div
              className={
                (styles.microwave, isLoading ? styles.finalSteps : null)
              }
            >
              <h4>In the Microwave</h4>
              <div
                className={(styles.steps, isLoading ? styles.finalSteps : null)}
              >
                {formatSteps(microwaveSteps).map((step, i) => (
                  <p key={i}>{`${i + 1}. ${step}`}</p>
                ))}
              </div>
            </div>
          )}

          {!isLoading && (
            <h3>
              <img src={Enjoy} alt="enjoy" />
              <b>Enjoy it Warm!</b>
            </h3>
          )}
        </div>

        {!isLoading && (
          <Fragment>
            <div className={styles.cookingRow}>
              <div className={styles.col50}>
                <div className={styles.iceImg}>
                  <img src={Ice} alt="Brrrrr" />
                </div>
                <div>
                  <p>
                    <span>Meals are delivered chilled</span> <br />
                    Containers are oven & microwave safe, lid is not safe.
                  </p>
                </div>
              </div>
              <div className={styles.col50}>
                <div className={styles.iceImg}>
                  <img src={CodeQR} alt="Brrrrr" />
                </div>
                <div>
                  <p>
                    <span>Scan the QR Code on your meal</span>
                    <br />
                    Find Heating instructions, Nutritional info, Expiration date{' '}
                  </p>
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  )
}

FinalSteps.propTypes = {
  microwaveSteps: PropTypes.string.isRequired,
  ovenSteps: PropTypes.string.isRequired
}

FinalSteps.defaultProps = {
  microwaveSteps: '',
  ovenSteps: ''
}

export default FinalSteps
