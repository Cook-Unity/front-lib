import React from 'react';
import styles from './ProductDescription.module.scss';


const ProductDescription = ({meal_story}) => {
  return <div className={styles.productStory}>
    <p className="quote_mark">“</p>
    <p className="story">{meal_story}</p>
  </div>
};

export default ProductDescription;
