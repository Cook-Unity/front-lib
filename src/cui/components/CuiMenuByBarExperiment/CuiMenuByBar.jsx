import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import DropdownMenuExperiment from './components/DropdownMenuExperiment/DropdownMenu'
import TabsMenuExperiment from './components/TabsMenuExperiment/TabsMenu'

import './CuiMenuByBar.scss'

import useOnClickOutside from '../../../hooks/useOnClickOutside'
import SecondaryTabsMenu from './components/SecondaryTabsMenu'

const CuiMenuByBarExperiment = ({
  isOpen,
  menuItems,
  menuSelected,
  tabSelected,
  setMenuSelected,
  setTabSelected,
  isScrolling,
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
      setMenuSelected(item.id, item.name, item.tabs && item?.tabs?.[0])
    }
  }

  const handleTabSelected = tab => {
    setMenuOpen(false)
    if (tab.id !== tabSelected.id) {
      setTabSelected(tab)
    }
  }

  return (
    <div className="cui-menu-by-exp">
      <div ref={ref}>
        <DropdownMenuExperiment
          menuItems={menuItems}
          handleOnClick={handleMenuSelected}
          handleClose={() => {
            setMenuOpen(false)
          }}
        />
      </div>

      <div
        className={classnames('cui-menu-by__tabs-container', {
          scrolling: isScrolling
        })}
      >
        <TabsMenuExperiment
          selectedTab={menuSelected}
          tabsItems={menuItems}
          handleOnClick={handleMenuSelected}
          isScrolling={isScrolling}
          showNavigation={showNavigation}
        />
        {menuSelected && menuSelected.tabs && (
          <SecondaryTabsMenu
            selectedTab={tabSelected}
            tabsItems={menuSelected.tabs}
            handleOnClick={handleTabSelected}
            isScrolling={isScrolling}
            showNavigation={showNavigation}
          />
        )}
      </div>
    </div>
  )
}

CuiMenuByBarExperiment.propTypes = {
  isOpen: PropTypes.bool,
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  menuSelected: PropTypes.object.isRequired,
  tabSelected: PropTypes.object.isRequired,
  setMenuSelected: PropTypes.func,
  setTabSelected: PropTypes.func,
  isScrolling: PropTypes.bool,
  onMenuByClick: PropTypes.func,
  showNavigation: PropTypes.bool
}

CuiMenuByBarExperiment.defaultProps = {
  isOpen: false,
  menuItems: [],
  menuSelected: [],
  tabSelected: undefined,
  setMenuSelected: () => {},
  setTabSelected: () => {},
  isScrolling: false,
  onMenuByClick: () => {},
  showNavigation: true
}

export default CuiMenuByBarExperiment
