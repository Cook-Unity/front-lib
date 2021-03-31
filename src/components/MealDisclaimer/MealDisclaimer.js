import React from 'react'
import images from '../../assets/images'
import styles from './MealDisclaimer.module.scss'

const MealDisclaimer = () => {
  return (
    <div id={styles.mealDisclaimer}>
      <p>
        <img src={images.iconAlert} alt="disclaimer" />
        CookUnity food items may contain or may have been manufactured in a
        facility that also processes: milk, eggs, fish, shellfish, tree nuts,
        peanuts, wheat/gluten, soy and sesame.
      </p>
    </div>
  )
}

export default MealDisclaimer
