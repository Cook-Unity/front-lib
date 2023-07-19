import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'
import images from '../../../../../assets/images'
import useOnClickOutside from '../../../../../hooks/useOnClickOutside'
import './DropdownMenu.scss'

const DropdownMenuExperiment = ({menuItems, handleOnClick, menuSelected}) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const ref = useRef()

  useOnClickOutside(ref, () => {
    isMenuOpen && setMenuOpen(false)
  })

  const onClickItem = item => {
    if (handleOnClick) {
      handleOnClick(item)
    }
    setMenuOpen(false)
  }

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen)
  }

  const handleClose = () => {
    setMenuOpen(false)
  }

  return (
    <div className="cui-dropdown-menu-exp">
      <div>
        <div
          className="cui-dropdown-menu-exp__button"
          onClick={handleMenuClick}
          role="button"
        >
          <img src={menuSelected.image} />
          <span className="cui-dropdown-menu-exp__button-text">
            {menuSelected.name}
          </span>
        </div>
      </div>

      {isMenuOpen && (
        <div className="cui-dropdown-menu-exp__open">
          <ul className="cui-dropdown-menu-exp__container">
            <button
              className="cui-dropdown-menu-exp__close"
              onClick={handleClose}
            >
              <img src={images.xclose} alt="close" />
            </button>
            {menuItems.map(menuItem => (
              <li
                key={menuItem.id}
                role="button"
                data-testid="menu-item"
                className="cui-dropdown-menu-exp__item"
                onClick={() => onClickItem(menuItem)}
              >
                <img
                  src={menuItem.image}
                  alt="menu-icon"
                  className="cui-dropdown-menu-exp__item-img"
                />
                <span className="cui-dropdown-menu-exp__item-name">
                  {menuItem.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

DropdownMenuExperiment.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleOnClick: PropTypes.func,
  menuSelected: PropTypes.object
}

DropdownMenuExperiment.defaultProps = {
  menuItems: [],
  handleOnClick: null,
  menuSelected: {name: 'All'}
}

export default DropdownMenuExperiment
