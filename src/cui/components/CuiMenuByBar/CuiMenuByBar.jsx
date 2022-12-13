import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import DropdownMenu from './components/DropdownMenu'
import TabsMenu from './components/TabsMenu'

import CuiIcon from '../CuiIcon/CuiIcon'
import './CuiMenuByBar.scss'

import useOnClickOutside from '../../../hooks/useOnClickOutside'

const CuiMenuByBar = ({
  isOpen,
  menuItems,
  menuSelected,
  tabSelected,
  setMenuSelected,
  setTabSelected,
  isScrolling,
  menuText,
  menuTextSecondary,
  onMenuByClick,
  showNavigation
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
    <div className="cui-menu-by">
      <div
        className={classnames('cui-menu-by__bar', {
          scrolling: isScrolling
        })}
      >
        <div className="cui-menu-by__text">
          <span
            className={classnames('cui-menu-by__text-primary', {
              scrolling: isScrolling
            })}
          >
            {menuText}
          </span>
          <span
            className="cui-menu-by__text-secondary"
            onClick={handleMenuClick}
          >
            {isScrolling ? '' : getMenuText()}
            <CuiIcon
              name="arrowDown"
              className={classnames({
                arrowUp: isMenuOpen,
                scrolling: isScrolling
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
        className={classnames('cui-menu-by__tabs-container', {
          scrolling: isScrolling
        })}
      >
        <TabsMenu
          selectedTab={tabSelected}
          tabsItems={menuSelected.tabs}
          handleOnClick={handleTabSelected}
          isScrolling={isScrolling}
          showNavigation={showNavigation}
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

CuiMenuByBar.propTypes = {
  isOpen: PropTypes.bool,
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  menuSelected: PropTypes.object.isRequired,
  tabSelected: PropTypes.object.isRequired,
  setMenuSelected: PropTypes.func,
  setTabSelected: PropTypes.func,
  isScrolling: PropTypes.bool,
  menuText: PropTypes.string,
  menuTextSecondary: PropTypes.string,
  onMenuByClick: PropTypes.func,
  showNavigation: PropTypes.bool
}

CuiMenuByBar.defaultProps = {
  isOpen: false,
  menuItems: defaultMenuItems,
  menuSelected: defaultMenuItems[0],
  tabSelected: defaultMenuItems[0].tabs[0],
  setMenuSelected: () => {},
  setTabSelected: () => {},
  isScrolling: false,
  menuText: 'Show menu',
  menuTextSecondary: 'by',
  onMenuByClick: () => {},
  showNavigation: true
}

export default CuiMenuByBar
