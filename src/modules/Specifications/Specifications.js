import React from 'react';
import PropTypes from 'prop-types';

import styles from './Specifications.module.scss';

const Specifications = ({specificationsDetails, isLoading}) => {

  return (
    specificationsDetails ? (
      <div className={styles.specificationDetailsContainer}>
        {specificationsDetails.map((detail, i) => {
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
