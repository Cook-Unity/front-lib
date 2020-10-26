import React from 'react';
import styles from './ProductTitle.module.scss';

const ProductTitle = ({mealDetail}) => {
  return <div data-testId="productTitle" className={styles.productTitle}>{mealDetail.name}</div>
};

export default ProductTitle;
