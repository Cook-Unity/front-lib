import React, {useState} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './TabsMenu.module.scss'

const TabsMenu = ({tabsItems, selectedTab, isScrolling, handleOnClick}) => {
  const [selectedItem, setSelectedItem] = useState(selectedTab)

  const onClickItem = item => {
    setSelectedItem(item)
    handleOnClick(item)
  }

  const isSelected = item => item.id === selectedItem.id

  return (
    <div>
      <div className={styles.tabsContainer}>
        <ul
          className={classnames(styles.tabs, {
            [styles.scrolling]: isScrolling
          })}
        >
          {tabsItems.map(tabItem => (
            <li
              key={tabItem.id}
              className={classnames(styles.item, {
                [styles.scrolling]: isScrolling
              })}
              onClick={() => onClickItem(tabItem)}
            >
              <img
                src={tabItem.image}
                alt="tab-icon"
                className={classnames(styles.image, {
                  [styles.scrolling]: isScrolling
                })}
              />
              <span
                className={classnames(styles.name, {
                  [styles.selected]: isSelected(tabItem)
                })}
              >
                {tabItem.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <hr
        className={classnames(styles.divider, {
          [styles.scrolling]: isScrolling
        })}
      />
    </div>
  )
}

TabsMenu.propTypes = {
  tabsItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedTab: PropTypes.object.isRequired,
  isScrolling: PropTypes.bool,
  handleOnClick: PropTypes.func
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
  handleOnClick: null
}

export default TabsMenu
