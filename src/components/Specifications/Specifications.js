import React from 'react';
import styles from './Specifications.module.scss';


const Specifications = ({image, label}) => {
  return <div
    className={styles.specifications}>
      <div className={styles.imageContainer}>
        <img alt={label} src={image} />
      </div>
      <span>{label.replace('Less Than', '<')}</span>
    </div>
};

export default Specifications;
