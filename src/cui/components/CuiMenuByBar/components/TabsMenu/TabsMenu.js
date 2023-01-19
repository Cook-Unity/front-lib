import React, {useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './TabsMenu.scss'
import ArrowCircle from '../../../../../common/ArrowCircle'

const TabsMenu = ({
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
      className={classnames('cui-tabs-container', {
        scrolling: isScrolling
      })}
    >
      <ul
        className={classnames('cui-tabs-container__tabs')}
        onScroll={handleScroll}
        ref={ref}
      >
        {tabsItems.map(tabItem => (
          <li
            key={tabItem.id}
            className={classnames('cui-tabs-container__item', {
              selected: isSelected(tabItem)
            })}
            data-testid="tab-item"
            onClick={() => handleOnClick(tabItem)}
            ref={isSelected(tabItem) ? selectedRef : null}
          >
            <img
              src={tabItem.image}
              alt="tab-icon"
              className={classnames('cui-tabs-container__item-img', {
                scrolling: isScrolling
              })}
              onError={e => {
                if (e.target.src !== tabItem.fallbackImage) {
                  e.target.src = tabItem.fallbackImage
                }
              }}
            />
            <span
              data-testid="span-item"
              className="cui-tabs-container__item-name"
            >
              {tabItem.name}
            </span>
          </li>
        ))}
      </ul>
      {showLeftArrow && (
        <div className={classnames('cui-tabs-container__navigation', 'left')}>
          {showNavigation && (
            <div
              className={classnames('cui-tabs-container__button')}
              onClick={() => handleClickButton(false)}
            >
              <ArrowCircle flip />
            </div>
          )}
          <div className={classnames('cui-tabs-container__gradient', 'left')} />
        </div>
      )}
      {showRightArrow && (
        <div className={classnames('cui-tabs-container__navigation', 'right')}>
          <div
            className={classnames('cui-tabs-container__gradient', 'right')}
          />
          {showNavigation && (
            <div
              className={classnames('cui-tabs-container__button')}
              onClick={() => handleClickButton(true)}
            >
              <ArrowCircle />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

TabsMenu.propTypes = {
  tabsItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedTab: PropTypes.object.isRequired,
  isScrolling: PropTypes.bool,
  handleOnClick: PropTypes.func,
  showNavigation: PropTypes.bool
}

const tabsItems = [
  {
    id: 0,
    name: 'All',
    image: 'https://cu-product-media.s3.amazonaws.com/media/menu/all/all.svg'
  }
]

TabsMenu.defaultProps = {
  tabsItems,
  selectedTab: tabsItems[0],
  isScrolling: false,
  handleOnClick: null,
  showNavigation: false
}

export default TabsMenu
