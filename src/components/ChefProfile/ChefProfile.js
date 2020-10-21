import React from 'react';
import styles from './ChefProfile.module.scss';
import Chevron from '../../assets/chevron.png'


const ChefProfile = (args) => {
  return <div className={styles.chefProfile}>
        <img src={args.chef_img} alt="chef" />
        <div>
          <p>
            Marc Forgione
          </p>
          <a>
            View Profile
            <img src={Chevron} alt="arrow" />
          </a>
        </div>
      </div>
};

export default ChefProfile;
