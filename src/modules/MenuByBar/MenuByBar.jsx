import React, {useState} from 'react'
import PropTypes from 'prop-types'

import DropdownMenu from '../../components/DropdownMenu'
import TabsMenu from '../../components/TabsMenu'

import images from '../../assets/images'
import styles from './MenuByBar.module.scss'

const MenuByBar = ({
  menuText,
  menuTextSecondary,
  menuItems,
  isOpen,
  handleTabClick
}) => {
  const [isMenuOpen, setMenuOpen] = useState(isOpen)
  const [menuSelected, setMenuSelected] = useState(menuItems[0])
  const [tabSelected, setTabSelected] = useState(menuItems[0].tabs[0])

  const handleMenuSelected = item => {
    setMenuOpen(false)
    setMenuSelected(item)
    setTabSelected(item.tabs[0])
  }

  const handleTabSelected = item => {
    if (item.id !== tabSelected.id) {
      setTabSelected(item)
      handleTabClick(item)
    }
  }

  return (
    <div className={styles.menuByContainer}>
      <div className={styles.menuBar}>
        <span className={styles.primaryText}>{menuText}</span>
        <span
          className={styles.secondaryText}
          onClick={() => {
            setMenuOpen(!isMenuOpen)
          }}
        >
          {menuTextSecondary} {menuSelected.name}
          <img
            src={images.greenArrow}
            alt="menu-icon"
            className={isMenuOpen ? styles.arrowUp : styles.arrowDown}
          />
        </span>
        {isMenuOpen && (
          <DropdownMenu
            menuItems={menuItems}
            handleOnClick={handleMenuSelected}
            handleClose={() => {
              setMenuOpen(false)
            }}
          />
        )}
      </div>

      <TabsMenu
        selectedTab={tabSelected}
        tabsItems={menuSelected.tabs}
        handleOnClick={handleTabSelected}
      />
    </div>
  )
}

MenuByBar.propTypes = {
  menuText: PropTypes.string,
  menuTextSecondary: PropTypes.string,
  isOpen: PropTypes.bool,
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleTabClick: PropTypes.func
}

MenuByBar.defaultProps = {
  menuText: 'Show menu',
  menuTextSecondary: 'by',
  isOpen: false,
  menuItems: [
    {
      id: 0,
      name: 'All',
      image: ''
    }
  ],
  handleTabClick: () => {}
}

export default MenuByBar
