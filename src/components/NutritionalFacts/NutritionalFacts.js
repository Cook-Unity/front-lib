import React from 'react'
import styles from './NutritionalFacts.module.scss'

const nutritionDetails = [
  {
    label: 'Portion Size',
    key: 'servingsize',
    key_auxiliary: 'servingSize',
    unit: 'g'
  },
  {
    label: 'Energy',
    key: 'calories',
    key_auxiliary: 'calories',
    unit: 'cal'
  },
  {
    label: 'Fat',
    key: 'fat',
    key_auxiliary: 'fat',
    unit: 'g'
  },
  {
    label: 'Saturated fat',
    key: 'saturated_fat',
    key_auxiliary: 'saturatedFat',
    unit: 'g'
  },
  {
    label: 'Carbs',
    key: 'carbs',
    key_auxiliary: 'carbs',
    unit: 'g'
  },
  {
    label: 'Sugars',
    key: 'sugar',
    key_auxiliary: 'sugar',
    unit: 'g'
  },
  {
    label: 'Proteins',
    key: 'protein',
    key_auxiliary: 'protein',
    unit: 'g'
  },
  {
    label: 'Fiber',
    key: 'fiber',
    key_auxiliary: 'fiber',
    unit: 'g'
  },
  {
    label: 'Sodium',
    key: 'sodium',
    key_auxiliary: 'sodium',
    unit: 'mg'
  }
]

const NutritionalFacts = ({nutritionalFacts}) => {
  if (!nutritionalFacts) return null

  return (
    <div className={styles.nutritionCard}>
      <h2>Nutrition Info</h2>
      {nutritionDetails.map((detail, i) => (
        <div className={styles.table_row} key={`nutritionalFacts-${i}`}>
          <p className={styles.label}>{detail.label}</p>
          <p className={styles.value}>
            {nutritionalFacts[detail.key] ||
              nutritionalFacts[detail.key_auxiliary]}
            {detail.unit}
          </p>
        </div>
      ))}
    </div>
  )
}

export default NutritionalFacts
