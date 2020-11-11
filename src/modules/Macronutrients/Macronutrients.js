import React from 'react';
import PropTypes from 'prop-types';

import Gauge from '../../common/Gauge';
import MiniGauge from '../../common/MiniGauge';

import styles from './Macronutrients.module.scss';

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
} from './utils';

const Macronutrients = ({ mealDetail }) => {
  if (!mealDetail) return null;

  const nutritionInfo = mealDetail.nutritionInfo;

  const dailyValue = Math.floor((mealDetail.calories * 100) / 2000);

  const proteinCal = getCalories(nutritionInfo.protein, MACRO_PROTEIN);

  const carbsCal = getCalories(nutritionInfo.carbs, MACRO_CARBS);

  const fatCal = getCalories(nutritionInfo.fat, MACRO_FAT);

  const calculatedCal = proteinCal + carbsCal + fatCal;

  let protein = getPercentage(proteinCal, calculatedCal);
  let carbs = getPercentage(carbsCal, calculatedCal);
  let fat = getPercentage(fatCal, calculatedCal);

  [protein, carbs, fat] = roundTo100([protein, carbs, fat]);

  const calories = mealDetail.calories;

  return (
    <div className={styles.macronutrients}>
      <h2 data-testid='title-macro'>Macronutrient Ratios</h2>
      <Gauge
        protein={protein}
        carbs={carbs}
        fat={fat}
        calories={calories}
        dv={dailyValue}
      />
      <div className={styles.gaugeLegend}>
        <div className={styles.columnMiniGauge}>
          <div className={styles.mobileRowGauge}>
            <div className={styles.legend}>
              <div className={styles.bubbleProtein} />
              <div data-testid='protein' className={styles.value}>
                Protein <strong>({formatProgress(protein || 0)})</strong>
              </div>
            </div>
            <p className={styles.gauge_value}>{nutritionInfo.protein}g</p>
          </div>
          <MiniGauge
            progress={getDietaryValue(nutritionInfo.protein, PROTEIN)}
            unit='dv'
          />
        </div>
        <div className={styles.columnMiniGauge}>
          <div className={styles.mobileRowGauge}>
            <div className={styles.legend}>
              <div className={styles.bubbleCarbs} />
              <div data-testid='carbs' className={styles.value}>
                Carbs <strong>({formatProgress(carbs || 0)})</strong>
              </div>
            </div>
            <p className={styles.gaugeValue}>{nutritionInfo.carbs}g</p>
          </div>
          <MiniGauge
            progress={getDietaryValue(nutritionInfo.carbs, CARBS)}
            unit='dv'
          />
        </div>
        <div className={styles.columnMiniGauge}>
          <div className={styles.mobileRowGauge}>
            <div className={styles.legend}>
              <div className={`${styles.bubble} ${styles.fat}`} />
              <div className={styles.value}>
                Fat <strong>({formatProgress(fat || 0)})</strong>
              </div>
            </div>
            <p className={styles.gaugeValue}>{nutritionInfo.fat}g</p>
          </div>
          <MiniGauge
            progress={getDietaryValue(nutritionInfo.fat, FAT)}
            unit='dv'
          />
        </div>
      </div>
      <p className={styles.aditionalInfoGauge}>
        <span>* % Daily Value</span> (DV) tells you how much food contributes to
        a 2K calorie based diet for healthy adults. Your DVs may be higher or
        lower depending on calorie needs.
      </p>
    </div>
  );
};

Macronutrients.propTypes = {
  mealDetail: PropTypes.array
};

Macronutrients.defaultProps = {
  mealDetail: []
};

export default Macronutrients;
