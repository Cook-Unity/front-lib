import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './TabsMenu.scss'
import { fullIconPath } from '../../../../../utils/images'

const TabsMenuExperiment = ({
  tabsItems,
  selectedTab,
  isScrolling,
  handleOnClick,
  showNavigation,
  size = 'medium'
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
      className={classnames(
        'cui-tabs-container-exp',
        `cui-tabs-container-exp-${size}`,
        {
          scrolling: isScrolling
        }
      )}
    >
      <ul
        className={classnames('cui-tabs-container-exp__tabs')}
        onScroll={handleScroll}
        ref={ref}
      >
        {tabsItems.map(tabItem => (
          <li
            key={tabItem.id}
            className={classnames(
              'cui-tabs-container-exp__item',
              `cui-tabs-container-exp__item-${size}`,
              {
                selected: isSelected(tabItem),
                disabled: tabItem.disabled
              }
            )}
            data-testid="tab-item"
            onClick={() => !tabItem.disabled && handleOnClick(tabItem)}
            ref={isSelected(tabItem) ? selectedRef : null}
          >
            <div className="cui-tabs-container-exp__item-img-container">
              <img
                src={tabItem.image}
                alt="tab-icon"
                className={classnames(
                  'cui-tabs-container-exp__item-img',
                  `cui-tabs-container-exp__item-img-${size}`,
                  {
                    scrolling: isScrolling,
                    svg: tabItem.image.endsWith('.svg')
                  }
                )}
                onError={e => {
                  if (e.target.src !== tabItem.fallbackImage) {
                    e.target.src = tabItem.fallbackImage
                  }
                }}
              />
            </div>
            <span
              data-testid="span-item"
              className={classnames('cui-tabs-container-exp__item-name', {
                '-no-line-height': tabItem.tags
              })}
            >
              {tabItem.name}
            </span>
            {tabItem.tags &&
              tabItem.tags.map(tag => (
                <div className="tab-item-tag-container" key={tag.label}>
                  <div className="tab-item-tag" style={tag.styles}>
                    {tag.label}
                  </div>
                </div>
              ))}
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
            <img src={fullIconPath('chevron-left.svg')} alt="chevron left" />
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
            <img src={fullIconPath('chevron-right.svg')} alt="chevron right" />
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
