import React from 'react';
import styles from './ItemCard.module.scss';

const ItemCard = ({text}) => {
  return <div className={styles.item}>{text}</div>;
};

export default ItemCard;
