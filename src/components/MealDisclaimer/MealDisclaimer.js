import React from 'react'
import {iconAlertBlack} from '../../assets/images'
import styles from './MealDisclaimer.module.scss'

const MealDisclaimer = () => {
  return (
    <div id={styles.mealDisclaimer}>
      <img src={iconAlertBlack} alt="disclaimer" />
      <p>
        CookUnity food items may contain or may have been manufactured in a
        facility that also processes: milk, eggs, fish, shellfish, tree nuts,
        peanuts, wheat/gluten, soy and sesame.
      </p>
    </div>
  )
}

export default MealDisclaimer
