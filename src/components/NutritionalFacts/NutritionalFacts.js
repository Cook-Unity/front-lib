import React from 'react'
import styles from './NutritionalFacts.module.scss'

const nutritionDetails = [
  {
    label: 'Portion Size',
    key: 'servingsize',
    unit: 'g'
  },
  {
    label: 'Energy',
    key: 'calories',
    unit: 'cal'
  },
  {
    label: 'Fat',
    key: 'fat',
    unit: 'g'
  },
  {
    label: 'Saturated fat',
    key: 'saturated_fat',
    unit: 'g'
  },
  {
    label: 'Carbs',
    key: 'carbs',
    unit: 'g'
  },
  {
    label: 'Sugars',
    key: 'sugar',
    unit: 'g'
  },
  {
    label: 'Proteins',
    key: 'protein',
    unit: 'g'
  },
  {
    label: 'Fiber',
    key: 'fiber',
    unit: 'g'
  },
  {
    label: 'Sodium',
    key: 'sodium',
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
            {nutritionalFacts[detail.key]}
            {detail.unit}
          </p>
        </div>
      ))}
    </div>
  )
}

export default NutritionalFacts
