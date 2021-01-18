import React from 'react'
import classnames from 'classnames'
import Gauge from '../../common/MacrosGauge'
import MiniGauge from '../../common/Gauge'
import {
  MACRO_CARBS,
  MACRO_FAT,
  MACRO_PROTEIN,
  CARBS,
  FAT,
  PROTEIN,
  getCalories,
  getDietaryValue,
  getPercentage,
  roundTo100,
  formatProgress
} from './utils'

import styles from './Macronutrients.module.scss'

const Macronutrients = props => {
  if (!props.nutritionalFacts) return null

  const nutritionalFacts = props.nutritionalFacts

  const dailyValue = Math.floor((props.calories * 100) / 2000)

  const proteinCal = getCalories(nutritionalFacts.protein, MACRO_PROTEIN)

  const carbsCal = getCalories(nutritionalFacts.carbs, MACRO_CARBS)

  const fatCal = getCalories(nutritionalFacts.fat, MACRO_FAT)

  const calculatedCal = proteinCal + carbsCal + fatCal

  let protein = getPercentage(proteinCal, calculatedCal)
  let carbs = getPercentage(carbsCal, calculatedCal)
  let fat = getPercentage(fatCal, calculatedCal)

  ;[protein, carbs, fat] = roundTo100([protein, carbs, fat])

  const calories = props.calories

  return (
    <div className={styles.cookunity__macronutrients_card}>
      <h2>Macronutrient Ratios</h2>
      <Gauge
        protein={protein}
        carbs={carbs}
        fat={fat}
        calories={calories}
        dv={dailyValue}
      />
      <div className={styles.gauge_legend}>
        <div className={styles['column_mini-gauge']}>
          <div className={styles['mobile-row_gauge']}>
            <div className={styles.legend}>
              <div
                className={classnames(styles.bubble, {
                  [styles.protein]: styles.protein
                })}
              />
              <div className={styles.value}>
                Protein <strong>({formatProgress(protein || 0)})</strong>
              </div>
            </div>
            <p className={styles.gauge_value}>{nutritionalFacts.protein}g</p>
          </div>
          <MiniGauge
            progress={getDietaryValue(nutritionalFacts.protein, PROTEIN)}
            unit="dv"
          />
        </div>
        <div className={styles['column_mini-gauge']}>
          <div className={styles['mobile-row_gauge']}>
            <div className={styles.legend}>
              <div
                className={classnames(styles.bubble, {
                  [styles.carbs]: styles.carbs
                })}
              />
              <div className={styles.value}>
                Carbs <strong>({formatProgress(carbs || 0)})</strong>
              </div>
            </div>
            <p className={styles.gauge_value}>{nutritionalFacts.carbs}g</p>
          </div>
          <MiniGauge
            progress={getDietaryValue(nutritionalFacts.carbs, CARBS)}
            unit="dv"
          />
        </div>
        <div className={styles['column_mini-gauge']}>
          <div className={styles['mobile-row_gauge']}>
            <div className={styles.legend}>
              <div
                className={classnames(styles.bubble, {
                  [styles.fat]: styles.fat
                })}
              />
              <div className={styles.value}>
                Fat <strong>({formatProgress(fat || 0)})</strong>
              </div>
            </div>
            <p className={styles.gauge_value}>{nutritionalFacts.fat}g</p>
          </div>
          <MiniGauge
            progress={getDietaryValue(nutritionalFacts.fat, FAT)}
            unit="dv"
          />
        </div>
      </div>
      <p className={styles['aditional-info_gauge']}>
        <span>* % Daily Value</span> (DV) tells you how much food contributes to
        a 2K calorie based diet for healthy adults. Your DVs may be higher or
        lower depending on calorie needs.
      </p>
    </div>
  )
}

export default Macronutrients
