import React from 'react'
import PropTypes from 'prop-types'

import './DropdownMenu.scss'
import images from '../../../../assets/images/images'

const DropdownMenu = ({menuItems, handleOnClick, handleClose}) => {
  const onClickItem = item => {
    if (handleOnClick) {
      handleOnClick(item)
    }
  }

  return (
    <div className="cui-dropdown-menu">
      <ul className="cui-dropdown-menu__container">
        <button className="cui-dropdown-menu__close" onClick={handleClose}>
          <img src={images.xclose} alt="close" />
        </button>
        {menuItems.map(menuItem => (
          <li
            key={menuItem.id}
            data-testid="menu-item"
            className="cui-dropdown-menu__item"
            onClick={() => onClickItem(menuItem)}
          >
            <img
              src={menuItem.image}
              alt="menu-icon"
              className="cui-dropdown-menu__item-img"
            />
            <span className="cui-dropdown-menu__item-name">
              {menuItem.name}
            </span>
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
