import React, {useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import CuiIcon from '../../../CuiIcon/CuiIcon'

import './TabsMenu.scss'

const TabsMenuExperiment = ({
  tabsItems,
  selectedTab,
  isScrolling,
  handleOnClick,
  showNavigation
}) => {
  const isSelected = item => item.id === selectedTab.id
  const ref = useRef(null)
  const selectedRef = useRef()
  const [scrollPosition, setScrollPosition] = useState(0)
  const [scrollWidth, setScrollWidth] = useState(0)

  const handleClickButton = val => {
    if (val) ref.current.scrollLeft += ref.current.offsetWidth - 85
    else ref.current.scrollLeft += -ref.current.offsetWidth + 85
  }

  const handleScroll = () => {
    setScrollPosition(ref.current.scrollLeft)
  }

  const showLeftArrow = scrollPosition > 0
  const showRightArrow = scrollPosition < scrollWidth

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setScrollWidth(ref.current.scrollWidth - ref.current.offsetWidth)
  })

  // to automatically scroll to the initial selected item by url
  useEffect(() => {
    setTimeout(() => {
      if (selectedRef && selectedRef.current) {
        selectedRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'nearest'
        })
      }
    }, 1000)
  }, [selectedTab])

  return (
    <div
      className={classnames('cui-tabs-container-exp', {
        scrolling: isScrolling
      })}
    >
      <ul
        className={classnames('cui-tabs-container-exp__tabs')}
        onScroll={handleScroll}
        ref={ref}
      >
        {tabsItems.map(tabItem => (
          <li
            key={tabItem.id}
            className={classnames('cui-tabs-container-exp__item', {
              selected: isSelected(tabItem)
            })}
            data-testid="tab-item"
            onClick={() => handleOnClick(tabItem)}
            ref={isSelected(tabItem) ? selectedRef : null}
          >
            <div className="cui-tabs-container-exp__item-img-container">
              {tabItem.image.endsWith('.svg') ? (
                <CuiIcon
                  path={tabItem.image}
                  className="cui-tabs-container-exp__item-svg"
                />
              ) : (
                <img
                  src={tabItem.image}
                  alt="tab-icon"
                  className={classnames('cui-tabs-container-exp__item-img', {
                    scrolling: isScrolling
                  })}
                  onError={e => {
                    if (e.target.src !== tabItem.fallbackImage) {
                      e.target.src = tabItem.fallbackImage
                    }
                  }}
                />
              )}
            </div>
            <span
              data-testid="span-item"
              className="cui-tabs-container-exp__item-name"
            >
              {tabItem.name}
            </span>
          </li>
        ))}
      </ul>
      {showLeftArrow && showNavigation && (
        <div
          className={classnames('cui-tabs-container-exp__navigation', 'left')}
        >
          <div
            className={classnames('cui-tabs-container-exp__button')}
            onClick={() => handleClickButton(false)}
          >
            <CuiIcon name="chevronLeft" />
          </div>
        </div>
      )}
      {showRightArrow && showNavigation && (
        <div
          className={classnames('cui-tabs-container-exp__navigation', 'right')}
        >
          <div
            className={classnames('cui-tabs-container-exp__button')}
            onClick={() => handleClickButton(true)}
          >
            <CuiIcon name="chevronRight" />
          </div>
        </div>
      )}
    </div>
  )
}

TabsMenuExperiment.propTypes = {
  tabsItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedTab: PropTypes.object.isRequired,
  isScrolling: PropTypes.bool,
  handleOnClick: PropTypes.func,
  showNavigation: PropTypes.bool
}

TabsMenuExperiment.defaultProps = {
  tabsItems: [],
  selectedTab: undefined,
  isScrolling: false,
  handleOnClick: null,
  showNavigation: false
}

export default TabsMenuExperiment
