import classNames from 'classnames'
import React, {useEffect, useState} from 'react'
import './CuiIcon.scss'

const imageUrl = filename =>
  `https://static.cookunity.com/cross/front-lib/icons/${filename}`

export const icons = {
  alert: imageUrl('alert-circle.svg'),
  checkmarkCircle2: imageUrl('checkmark-circle-2.svg'),
  chevronRight: imageUrl('chevron-right.svg'),
  heart: imageUrl('heart.svg'),
  messageCircle: imageUrl('message-circle.svg'),
  menu: imageUrl('menu.svg'),
  plus: imageUrl('plus.svg'),
  percent: imageUrl('percent.svg'),
  star: imageUrl('star.svg')
}

const CuiIcon = ({name, path, role = 'icon', className, onClick}) => {
  const [svg, setSvg] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isErrored, setIsErrored] = useState(false)

  useEffect(() => {
    fetch(path || icons[name])
      .then(res => res.text())
      .then(setSvg)
      .catch(setIsErrored)
      .then(() => setIsLoaded(true))
  }, [name, path])

  return (
    <div
      className={classNames(
        'cui-icon',
        `cui-icon-${isLoaded ? 'loaded' : 'loading'}`,
        isErrored && 'cui-icon-errored',
        role,
        className
      )}
      dangerouslySetInnerHTML={{__html: svg}}
      onClick={onClick}
    />
  )
}

export default CuiIcon
