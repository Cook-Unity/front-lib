import classNames from 'classnames'
import React, {useState} from 'react'
import {isMobileOrTabletDevice} from '../../../utils/mediaQueries'
import CuiButton from '../CuiButton/CuiButton'
import CuiIcon from '../CuiIcon/CuiIcon'
import './CuiCartDetail.scss'

const CuiCartDetail = ({
  qy = 0,
  viewTitleText = 'View details',
  itemsSelectedText = `items selected`,
  addMoreText = `Add more or continue`,
  ctaText = `Browse Full Menu`,
  ctaClick,
  items = [
    {key: 'Delivery Day', value: 'Saturday, September 05'},
    {key: 'Delivery Window', value: '3:00PM - 6:00PM'},
    {key: 'Delivery Address', value: 'Av. Madison 782, 2nd Floor C'},
    {key: 'Weekly Plan', value: '6 Meals'}
  ],
  loading = false,
  children,
  className,
  ...props
}) => {
  const [expanded, setExpanded] = useState(false)

  const handleExpanded = () => {
    console.log(expanded)
    setExpanded(!expanded)
  }
  const wrapperName = 'cui-cart-detail'
  return (
    <div
      className={classNames(
        wrapperName,
        `${wrapperName}${(expanded && '-expanded') || ''}`,
        loading && `${wrapperName}-loading`,
        className
      )}
      {...props}
    >
      <div
        className={classNames(
          `${wrapperName}-view ${(expanded && 'expanded') || ''}`,
          className
        )}
        onClick={handleExpanded}
      >
        <span className={`${wrapperName}-view-title`}>{viewTitleText}</span>
        <CuiIcon name={expanded ? 'chevronUp' : 'chevronDown'} />
      </div>
      <div className={`${wrapperName}-state`}>
        <div className={`${wrapperName}-state-items-icon`}>
          <CuiIcon name="cart" />
        </div>
        <div
          className={`${wrapperName}-state-items-selected`}
        >{`${qy} ${itemsSelectedText}`}</div>
        <div className={`${wrapperName}-state-items-add-more`}>
          {addMoreText}
        </div>
        <div className={`${wrapperName}-state-items-button`}>
          <CuiButton
            type="button"
            fill="solid"
            size={isMobileOrTabletDevice() ? 'small' : 'medium'}
            color={isMobileOrTabletDevice() ? 'dark' : 'primary'}
            onClick={ctaClick}
          >
            {ctaText}
          </CuiButton>
        </div>
      </div>
      {expanded && (
        <div className={classNames(`${wrapperName}-content`)}>
          {items.length > 0 &&
            items.map(item => {
              return (
                <div
                  key={item.key}
                  className={classNames(`${wrapperName}-content-items`)}
                >
                  <span
                    className={classNames(`${wrapperName}-content-items-key`)}
                  >
                    {item.key}
                  </span>
                  <div
                    className={classNames(`${wrapperName}-content-items-value`)}
                  >
                    {item.value}
                  </div>
                </div>
              )
            })}
        </div>
      )}
    </div>
  )
}

export default CuiCartDetail
