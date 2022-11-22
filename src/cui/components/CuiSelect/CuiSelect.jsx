import classNames from 'classnames'
import React from 'react'
import Select, {components} from 'react-select'

import './CuiSelect.scss'

const imageUrl = filename =>
  `https://static.cookunity.com/cross/front-lib/images/${filename}`

const OpenIndicator = imageUrl('dropdown-arrow-down.png')
const CloseIndicator = imageUrl('dropdown-arrow-up.png')

const DropdownIndicator = props => {
  const {
    selectProps: {menuIsOpen}
  } = props
  return (
    <components.DropdownIndicator {...props}>
      {menuIsOpen ? (
        <img alt="close-dropdown" src={CloseIndicator} />
      ) : (
        <img alt="open-dropdown" src={OpenIndicator} />
      )}
    </components.DropdownIndicator>
  )
}

const IndicatorSeparator = props => null

const CuiSelect = ({
  isDisabled = false,
  isSearchable = false,
  isMulti = false,
  placeholder = '',
  options = [],
  onChange = () => {},
  className = '',
  value,
  ...props
}) => {
  return (
    <Select
      className={classNames(
        'cui-select',
        isDisabled && `cui-select-disabled`,
        classNames
      )}
      classNamePrefix="cui-select"
      components={{DropdownIndicator, IndicatorSeparator}}
      isDisabled={isDisabled}
      isSearchable={isSearchable}
      isMulti={isMulti}
      placeholder={placeholder}
      options={options}
      value={value}
      onChange={onChange}
      {...props}
    />
  )
}

export default CuiSelect
