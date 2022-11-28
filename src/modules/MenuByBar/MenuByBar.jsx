import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import DropdownMenu from '../../components/DropdownMenu'
import TabsMenu from '../../components/TabsMenu'

import images from '../../assets/images'
import styles from './MenuByBar.module.scss'

import useOnClickOutside from '../../hooks/useOnClickOutside'

const MenuByBar = ({
  isOpen,
  menuItems,
  menuSelected,
  tabSelected,
  setMenuSelected,
  setTabSelected,
  isScrolling,
  menuText,
  menuTextSecondary,
  onMenuByClick
}) => {
  const [isMenuOpen, setMenuOpen] = useState(isOpen)
  const ref = useRef()
  useOnClickOutside(ref, () => {
    isMenuOpen && setMenuOpen(false)
  })

  const handleMenuSelected = item => {
    setMenuOpen(false)
    if (item.id !== menuSelected.id) {
      setMenuSelected(item.id, item.name, item.tabs[0])
    }
  }

  const handleTabSelected = tab => {
    setMenuOpen(false)
    if (tab.id !== tabSelected.id) {
      setTabSelected(tab)
    }
  }

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen)
    onMenuByClick(!isMenuOpen)
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
        <div className={styles.menuBarText}>
          <span
            className={classnames(styles.primaryText, {
              [styles.scrolling]: isScrolling
            })}
          >
            {menuText}
          </span>
          <span className={styles.secondaryText} onClick={handleMenuClick}>
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
        </div>

        {isMenuOpen && (
          <div ref={ref}>
            <DropdownMenu
              menuItems={menuItems}
              handleOnClick={handleMenuSelected}
              handleClose={() => {
                setMenuOpen(false)
              }}
            />
          </div>
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

const defaultMenuItems = [
  {
    id: 0,
    name: 'All',
    image: '',
    tabs: [
      {
        id: 0,
        name: 'All',
        image:
          'https://cu-product-media.s3.amazonaws.com/media/menu/all/all.svg'
      }
    ]
  }
]

MenuByBar.propTypes = {
  isOpen: PropTypes.bool,
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  menuSelected: PropTypes.object.isRequired,
  tabSelected: PropTypes.object.isRequired,
  setMenuSelected: PropTypes.func,
  setTabSelected: PropTypes.func,
  isScrolling: PropTypes.bool,
  menuText: PropTypes.string,
  menuTextSecondary: PropTypes.string,
  onMenuByClick: PropTypes.func
}

MenuByBar.defaultProps = {
  isOpen: false,
  menuItems: defaultMenuItems,
  menuSelected: defaultMenuItems[0],
  tabSelected: defaultMenuItems[0].tabs[0],
  setMenuSelected: () => {},
  setTabSelected: () => {},
  isScrolling: false,
  menuText: 'Show menu',
  menuTextSecondary: 'by',
  onMenuByClick: () => {}
}

export default MenuByBar
