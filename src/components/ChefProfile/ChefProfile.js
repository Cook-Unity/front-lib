import React from 'react';
import PropTypes from 'prop-types';

import styles from './ChefProfile.module.scss';
import Chevron from '../../assets/chevron.png'


const ChefProfile = ({chef_firstname,chef_lastname, chef_img}) => {
  return (
    <div className={styles.chefProfile}>
      <img src={chef_img} alt="chef" />
      <div>
        <p>
          {chef_firstname}  {chef_lastname}
        </p>
        <a>
          View Profile
          <img src={Chevron} alt="arrow" />
        </a>
      </div>
    </div>
  )
};


ChefProfile.propTypes = {
  chef_firstname: PropTypes.string.isRequired,
  chef_lastname: PropTypes.string.isRequired
};

ChefProfile.defaultProps = {
  chef_firstname: '',
  chef_lastname: ''
};

export default ChefProfile;
