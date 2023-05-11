import React, {useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './SecondaryTabsMenu.scss'
import {fullIconPath} from '../../../../../utils/images'

const SecondaryTabsMenu = ({
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
      className={classnames('cui-secondary-tabs', {
        scrolling: isScrolling
      })}
    >
      <ul
        className={classnames('cui-secondary-tabs__tabs')}
        onScroll={handleScroll}
        ref={ref}
      >
        {tabsItems.map(tabItem => (
          <li
            key={tabItem.id}
            className={classnames('cui-secondary-tabs__item', {
              selected: isSelected(tabItem)
            })}
            data-testid="tab-item"
            onClick={() => handleOnClick(tabItem)}
            ref={isSelected(tabItem) ? selectedRef : null}
          >
            <img
              src={tabItem.image}
              alt="tab-icon"
              className={classnames('cui-secondary-tabs__item-img', {
                scrolling: isScrolling,
                svg: tabItem.image.endsWith('.svg')
              })}
              onError={e => {
                if (e.target.src !== tabItem.fallbackImage) {
                  e.target.src = tabItem.fallbackImage
                }
              }}
            />
            <span
              data-testid="span-item"
              className="cui-secondary-tabs__item-name"
            >
              {tabItem.name}
            </span>
          </li>
        ))}
      </ul>
      {showLeftArrow && showNavigation && (
        <div className={classnames('cui-secondary-tabs__navigation', 'left')}>
          <div
            className={classnames('cui-secondary-tabs__button')}
            onClick={() => handleClickButton(false)}
          >
            <img src={fullIconPath('chevron-left.svg')} alt="chevron left" />
          </div>
        </div>
      )}
      {showRightArrow && showNavigation && (
        <div className={classnames('cui-secondary-tabs__navigation', 'right')}>
          <div
            className={classnames('cui-secondary-tabs__button')}
            onClick={() => handleClickButton(true)}
          >
            <img src={fullIconPath('chevron-right.svg')} alt="chevron right" />
          </div>
        </div>
      )}
    </div>
  )
}

SecondaryTabsMenu.propTypes = {
  tabsItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedTab: PropTypes.object.isRequired,
  isScrolling: PropTypes.bool,
  handleOnClick: PropTypes.func,
  showNavigation: PropTypes.bool
}

SecondaryTabsMenu.defaultProps = {
  tabsItems: undefined,
  selectedTab: undefined,
  isScrolling: false,
  handleOnClick: null,
  showNavigation: false
}

export default SecondaryTabsMenu
