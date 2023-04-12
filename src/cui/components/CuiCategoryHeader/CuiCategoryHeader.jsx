import React from 'react'

import './CuiCategoryHeader.scss'

const CuiCategoryHeader = ({image, name, title, description, items}) => (
  <>
    <div className="category-header-mobile">
      <div className="category-header__details-name">{name}</div>
      <div className="category-header__details-title">{title}</div>

      <div className="category-header__details">
        <div className="category-header__img">
          <img src={image} alt="category" />
        </div>
        <div className="category-header__details-section">
          <div className="category-header__details-description">
            {description}
          </div>
          <div className="category-header__details-items">
            {items} available items
          </div>
        </div>
      </div>
    </div>

    <div className="category-header-desktop">
      <div className="category-header__img">
        <img src={image} alt="category" />
      </div>
      <div className="category-header__details">
        <div className="category-header__details-name">{name}</div>
        <div className="category-header__details-title">{title}</div>
        <div className="category-header__details-description">
          {description}
        </div>
        <div className="category-header__details-items">
          {items} available items
        </div>
      </div>
    </div>
  </>
)

export default CuiCategoryHeader
