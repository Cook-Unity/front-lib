import React, {useState} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import DropdownMenu from '../../components/DropdownMenu'
import TabsMenu from '../../components/TabsMenu'

import images from '../../assets/images'
import styles from './MenuByBar.module.scss'

const MenuByBar = ({
  menuText,
  menuTextSecondary,
  menuItems,
  isOpen,
  isScrolling,
  handleTabClick
}) => {
  const [isMenuOpen, setMenuOpen] = useState(isOpen)
  const [menuSelected, setMenuSelected] = useState(menuItems[0])
  const [tabSelected, setTabSelected] = useState(menuItems[0].tabs[0])

  const handleMenuSelected = item => {
    setMenuOpen(false)
    setMenuSelected(item)
    setTabSelected(item.tabs[0])
    handleTabClick(item.id, item.name, item.tabs[0])
  }

  const handleTabSelected = item => {
    if (item.id !== tabSelected.id) {
      setTabSelected(item)
      handleTabClick(menuSelected.id, menuSelected.name, item)
    }
  }

  const getMenuText = () => {
    return `${menuTextSecondary} ${menuSelected.name}`
  }

  return (
    <div className={styles.menuByContainer}>
      <div
        className={classnames(styles.menuBar, {
          [styles.scrolling]: isScrolling
        })}
      >
        <span
          className={classnames(styles.primaryText, {
            [styles.scrolling]: isScrolling
          })}
        >
          {menuText}
        </span>
        <span
          className={styles.secondaryText}
          onClick={() => {
            setMenuOpen(!isMenuOpen)
          }}
        >
          {isScrolling ? '' : getMenuText()}
          <img
            src={images.greenArrow}
            alt="menu-icon"
            className={classnames({
              [styles.arrowUp]: isMenuOpen,
              [styles.scrolling]: isScrolling
            })}
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

      <div
        className={classnames(styles.tabsContainer, {
          [styles.scrolling]: isScrolling
        })}
      >
        <TabsMenu
          selectedTab={tabSelected}
          tabsItems={menuSelected.tabs}
          handleOnClick={handleTabSelected}
          isScrolling={isScrolling}
        />
      </div>
    </div>
  )
}

MenuByBar.propTypes = {
  menuText: PropTypes.string,
  menuTextSecondary: PropTypes.string,
  isOpen: PropTypes.bool,
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  isScrolling: PropTypes.bool,
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
  isScrolling: false,
  handleTabClick: () => {}
}

export default MenuByBar
