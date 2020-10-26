import React from 'react';
import styles from './ChefProfile.module.scss';
import Chevron from '../../assets/chevron.png'


const ChefProfile = ({mealDetail}) => {
  return <div className={styles.chefProfile}>
        <img src={mealDetail.chef_img} alt="chef" />
        <div>
          <p>
            {mealDetail.chef_firstname}  {mealDetail.chef_lastname}
          </p>
          <a>
            View Profile
            <img src={Chevron} alt="arrow" />
          </a>
        </div>
      </div>
};

export default ChefProfile;
