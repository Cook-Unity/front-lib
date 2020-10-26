import React from 'react';
import styles from './Specifications.module.scss';


const Specifications = ({mealDetail, isLoading}) => {

  return (
    mealDetail.specificationsDetails ? (
      <div className={styles.specificationDetailsContainer}>
        {mealDetail.specificationsDetails.map((detail, i) => {
          return (
            <div
              className={`${styles.specificationDetail} ${isLoading && loading}`} key={i}>
              <div className={styles.imageContainer}>
                <img alt={detail.label} src={detail.image} />
              </div>
              <span>{detail.label.replace('Less Than', '<')}</span>
            </div>
          )
        })}
      </div>
    ) : null
    )
  }

export default Specifications;
