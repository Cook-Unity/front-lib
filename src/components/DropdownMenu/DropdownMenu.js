import React from 'react'
import PropTypes from 'prop-types'

import images from '../../assets/images'
import styles from './DropdownMenu.module.scss'

const DropdownMenu = ({menuItems, handleOnClick, handleClose}) => {
  const onClickItem = item => {
    if (handleOnClick) {
      handleOnClick(item)
    }
  }

  return (
    <div className={styles.menuContainer}>
      <ul className={styles.dropdownContainer}>
        <button className={styles.close} onClick={handleClose}>
          <img src={images.xclose} alt="close" />
        </button>
        {menuItems.map(menuItem => (
          <li
            key={menuItem.id}
            className={styles.item}
            onClick={() => onClickItem(menuItem)}
          >
            <img
              src={menuItem.image}
              alt="menu-icon"
              className={styles.image}
            />
            <span className={styles.name}>{menuItem.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

DropdownMenu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleOnClick: PropTypes.func,
  handleClose: PropTypes.func
}

const menuItems = [
  {
    id: 0,
    name: 'All',
    image: 'https://cu-product-media.s3.amazonaws.com/media/menu/menu/all.png'
  }
]

DropdownMenu.defaultProps = {
  menuItems,
  handleOnClick: null,
  handleClose: null
}

export default DropdownMenu
